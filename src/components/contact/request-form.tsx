// src/components/contact/request-form.tsx
"use client";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { site } from "@/content/site";
import type { Locale } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ThinkingOrb } from "@/components/ui/thinking-orbs";

type State = "idle" | "sending" | "sent" | "error";

export function RequestForm({ locale }: { locale: Locale }) {
  const f = site.contact.form;
  const [state, setState] = useState<State>("idle");
  const needKeys = f.needs.map((n) => n.key) as string[];
  const sel = useRef<HTMLSelectElement>(null);
  useEffect(() => {
    const n = new URLSearchParams(window.location.search).get("need");
    if (n && needKeys.includes(n) && sel.current) sel.current.value = n;
  }, [needKeys]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setState("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!res.ok) throw new Error(String(res.status));
      setState("sent");
      form.reset();
    } catch {
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div role="status" className="border border-line rounded-lg p-8 bg-surface">
        <p className="text-xl font-medium">{f.success[locale]}</p>
        <a href={site.telegram} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block font-mono text-xs uppercase tracking-wider text-accent hover:underline">
          {f.successTelegram[locale]} ↗
        </a>
      </div>
    );
  }

  const field = "bg-background border-line focus-visible:ring-accent";
  return (
    <form onSubmit={onSubmit} className="space-y-6 border border-line rounded-lg p-6 md:p-8 bg-surface">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">{f.name[locale]}</Label>
          <Input id="name" name="name" required maxLength={100} className={field} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">{f.email[locale]}</Label>
          <Input id="email" name="email" type="email" required maxLength={200} className={field} />
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="company">{f.company[locale]}</Label>
          <Input id="company" name="company" maxLength={200} className={field} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="need">{f.need[locale]}</Label>
          <select
            id="need"
            name="need"
            ref={sel}
            defaultValue="internship"
            className="flex h-10 w-full rounded-md border border-line bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            {f.needs.map((n) => (
              <option key={n.key} value={n.key}>{n.label[locale]}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">{f.message[locale]}</Label>
        <Textarea id="message" name="message" required rows={6} maxLength={5000} placeholder={f.messagePlaceholder[locale]} className={`${field} resize-none`} />
      </div>
      {state === "error" && <p role="alert" className="text-sm text-destructive">{f.error[locale]}</p>}
      <div className="flex items-center gap-4">
        <Button type="submit" size="lg" disabled={state === "sending"} className="font-mono uppercase tracking-wider text-xs">
          {state === "sending" ? f.sending[locale] : f.submit[locale]}
        </Button>
        <span className="inline-flex size-6 items-center justify-center" aria-hidden="true">
          <ThinkingOrb state="working" size={20} theme="dark" />
        </span>
      </div>
    </form>
  );
}
