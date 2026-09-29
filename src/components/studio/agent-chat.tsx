"use client";
// The peak: a real agent on the glass pane. Streams from /api/studio/agent.
import { useEffect, useRef, useState, type FormEvent } from "react";
import { studio, TELEGRAM, type StudioLang } from "@/content/studio";

type Msg = { role: "user" | "assistant"; content: string };
const MAX_TURNS = 3; // mirrors the API limit

export function AgentChat({ lang }: { lang: StudioLang }) {
  const t = studio.agent;
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [draft, setDraft] = useState("");
  const [busy, setBusy] = useState(false);
  const [note, setNote] = useState<"" | "busy" | "limit">("");
  const log = useRef<HTMLOListElement>(null);

  useEffect(() => {
    log.current?.scrollTo({ top: log.current.scrollHeight });
  }, [msgs]);

  const dropEmpty = () => setMsgs((m) => (m.at(-1)?.role === "assistant" && !m.at(-1)!.content ? m.slice(0, -1) : m));

  async function send(text: string) {
    text = text.trim().slice(0, 500);
    if (!text || busy) return;
    if (msgs.filter((m) => m.role === "user").length >= MAX_TURNS) return setNote("limit");
    const history: Msg[] = [...msgs, { role: "user", content: text }];
    setMsgs([...history, { role: "assistant", content: "" }]);
    setDraft("");
    setNote("");
    setBusy(true);
    try {
      const res = await fetch("/api/studio/agent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lang, messages: history }),
      });
      if (!res.ok || !res.body) {
        const j = (await res.json().catch(() => ({}))) as { error?: string };
        setNote(j.error === "turn_limit" ? "limit" : "busy");
        return dropEmpty();
      }
      const reader = res.body.getReader();
      const dec = new TextDecoder();
      let acc = "";
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += dec.decode(value, { stream: true });
        const shown = acc.split("\u0000")[0].trimEnd();
        setMsgs((m) => [...m.slice(0, -1), { role: "assistant", content: shown }]);
      }
      if (acc.includes("\u0000")) setNote("busy"); // server-side error or refusal sentinel
      dropEmpty();
    } catch {
      setNote("busy");
      dropEmpty();
    } finally {
      setBusy(false);
    }
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    send(draft);
  };
  const answered = msgs.some((m) => m.role === "assistant" && m.content);

  return (
    <section className="agent" aria-labelledby="agent-h">
      <h2 id="agent-h">{t.h2[lang]}</h2>
      <p className="body">{t.p[lang]}</p>

      <ol className="agent__log" ref={log} aria-live="polite">
        {msgs.map((m, i) => (
          <li key={i} className={`msg msg--${m.role}`}>
            {m.content || (
              <span className="dots" role="img" aria-label={t.thinking[lang]}>
                <i /> <i /> <i />
              </span>
            )}
          </li>
        ))}
      </ol>

      {msgs.length === 0 && (
        <div className="chips">
          {t.chips[lang].map((c) => (
            <button key={c} type="button" className="chip" onClick={() => send(c)}>
              {c}
            </button>
          ))}
        </div>
      )}

      {note && (
        <p className="agent__note" role="status">
          {note === "limit" ? t.limit[lang] : t.busy[lang]}{" "}
          <a href={TELEGRAM} target="_blank" rel="noopener noreferrer">Telegram</a>
        </p>
      )}
      {answered && !note && !busy && (
        <a className="agent__cont" href={TELEGRAM} target="_blank" rel="noopener noreferrer">
          {t.continue[lang]}
        </a>
      )}

      <form className="ask" onSubmit={onSubmit}>
        <label htmlFor="agent-in" className="sr-only">{t.inputLabel[lang]}</label>
        <input
          id="agent-in"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder={t.placeholder[lang]}
          maxLength={500}
          autoComplete="off"
          enterKeyHint="send"
        />
        <button type="submit" className="btn btn--accent" disabled={busy || !draft.trim()}>
          {t.send[lang]}
        </button>
      </form>
      <p className="svc">{t.label[lang]}</p>
    </section>
  );
}
