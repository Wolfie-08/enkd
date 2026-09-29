// studio.enkd.uz: one continuous Blender flight (worldflight mode). Only the spacer is in document flow.
import { notFound } from "next/navigation";
import { isStudioLang, studio, studioLangs, studioPath, EMAIL, TELEGRAM, type StudioLang } from "@/content/studio";
import { Engine } from "@/components/studio/engine";
import { AgentChat } from "@/components/studio/agent-chat";
import { PromoButton } from "@/components/studio/promo-button";

// Leg weights hold one pace (0.22 viewport-heights per second of film), except the agent
// leg: its middle is a near-still camera, so the extra scroll room is the peak's dwell.
const LEGS = [
  { w: 1.32, linger: 0.2 },  // 6s  approach
  { w: 1.32, linger: 0.25 }, // 6s  inbox cloud
  { w: 2.4, linger: 0.45 },  // 8s  agent pane (peak)
  { w: 1.32, linger: 0.3 },  // 6s  CRM
  { w: 1.32, linger: 0.3 },  // 6s  automation
  { w: 1.32, linger: 0.3 },  // 6s  dashboard
  { w: 1.98, linger: 0.2 },  // 9s  promo screen, crane up
];
// Copy windows as fractions of the summed weights (10.98), tuned to frames of the film.
const WIN = {
  inbox: "0.135 0.235 0.25 0.25",
  agent: "0.29 0.462 0.1 0.12",
  crm: "0.475 0.575 0.25 0.25",
  automation: "0.598 0.69 0.25 0.25",
  dashboard: "0.718 0.815 0.25 0.25",
  promo: "0.862 0.93 0.25 0.25",
  finale: "0.935 1 0.4 0",
};
const center = (w: string) => { const [a, b] = w.split(" ").map(Number); return ((a + b) / 2).toFixed(3); };
const JUMP = [WIN.inbox, WIN.agent, WIN.crm, WIN.automation, WIN.dashboard, WIN.promo].map(center);

function Cta({ lang }: { lang: StudioLang }) {
  return <a className="btn btn--accent" href={TELEGRAM} target="_blank" rel="noopener noreferrer">{studio.cta[lang]}</a>;
}

export default async function StudioPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isStudioLang(lang)) notFound();
  const s = studio;

  return (
    <>
      <header className="bar">
        <a className="wordmark" href={studioPath(lang)} data-go="0"><b>enkd</b><span>studio</span></a>
        <div className="bar__end">
          <nav className="langs" aria-label="Language">
            {studioLangs.map((l) => (
              <a key={l} href={studioPath(l)} hrefLang={l} aria-current={l === lang ? "true" : undefined}>{s.langName[l]}</a>
            ))}
          </nav>
          <Cta lang={lang} />
        </div>
      </header>

      <nav aria-label={s.routeLabel[lang]}>
        <ol className="rail">
          {s.stations.map((st, i) => (
            <li key={st.leg}>
              <button type="button" data-leg={st.leg} data-go={JUMP[i]}>{st.name[lang]}</button>
            </li>
          ))}
        </ol>
      </nav>

      <main className="studio" data-sc-mode="worldflight" data-sc-seam="0.02">
        <div data-sc-world aria-hidden="true">
          {LEGS.map((leg, i) => (
            <div key={i} data-sc-segment data-sc-w={leg.w} data-sc-linger={leg.linger}
              data-sc-waypoint={i ? s.stations[i - 1].name.en : "Arrival"}>
              {/* Phones get a poster cut from the portrait clip, so the poster-to-video fade lines up. */}
              <picture>
                <source media="(max-width: 860px)" srcSet={`/studio/world/p${i}-m.jpg`} />
                {/* eslint-disable-next-line @next/next/no-img-element -- engine-driven poster, not a content image */}
                <img className="sc-world__poster" src={`/studio/world/p${i}.jpg`} alt="" width={1920} height={1080}
                  decoding="async" fetchPriority={i === 0 ? "high" : "low"} />
              </picture>
              <video data-sc-src={`/studio/world/leg${i}.mp4`} data-sc-src-mobile={`/studio/world/leg${i}-m.mp4`}
                data-sc-lerp="0.12" muted playsInline preload="none" />
            </div>
          ))}
        </div>

        <div data-sc-world-copy>
          <div className="sc-world__scrim sc-scrim--band" />

          <div className="sc-copy sc-copy--lead" data-sc-copy data-sc-window="hero">
            <h1>{s.hero.h1[lang]}</h1>
            <p className="lede">{s.hero.sub[lang]}</p>
            <div className="actions"><Cta lang={lang} /></div>
          </div>

          <div className="sc-copy sc-copy--trail" data-sc-copy data-sc-window={WIN.inbox}>
            <h2>{s.inbox.h2[lang]}</h2>
            <p className="body">{s.inbox.p[lang]}</p>
          </div>

          <div className="agent-wrap" data-sc-copy data-sc-window={WIN.agent}>
            <AgentChat lang={lang} />
          </div>

          <div className="sc-copy sc-copy--lead" data-sc-copy data-sc-window={WIN.crm}>
            <h2>{s.crm.h2[lang]}</h2>
            <p className="body">{s.crm.p[lang]}</p>
            <p className="svc">{s.crm.label[lang]}</p>
          </div>

          <div className="sc-copy sc-copy--trail" data-sc-copy data-sc-window={WIN.automation}>
            <h2>{s.automation.h2[lang]}</h2>
            <p className="body">{s.automation.p[lang]}</p>
            <p className="svc">{s.automation.label[lang]}</p>
          </div>

          <div className="sc-copy sc-copy--lead" data-sc-copy data-sc-window={WIN.dashboard}>
            <h2>{s.dashboard.h2[lang]}</h2>
            <p className="body">{s.dashboard.p[lang]}</p>
            <p className="svc">{s.dashboard.label[lang]}</p>
          </div>

          <div className="sc-copy sc-copy--trail" data-sc-copy data-sc-window={WIN.promo}>
            <h2>{s.promo.h2[lang]}</h2>
            <p className="body">{s.promo.p[lang]}</p>
            <div className="actions"><PromoButton label={s.promo.play[lang]} close={s.promo.close[lang]} /></div>
          </div>

          <div className="finale" data-sc-copy data-sc-window={WIN.finale}>
            <h2>{s.finale.h2[lang]}</h2>
            <p className="lede">{s.finale.p[lang]}</p>
            <ol className="steps">
              {s.finale.steps.map((st) => (
                <li key={st.t.en}><b>{st.t[lang]}</b><span>{st.d[lang]}</span></li>
              ))}
            </ol>
            <div className="actions">
              <Cta lang={lang} />
              <a className="btn btn--ghost" href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
            <p className="proof">{s.finale.proof[lang]}</p>
            <p className="fine"><span>© 2026 Enkd Studio · {s.finale.place[lang]}</span><a href="https://www.enkd.uz">enkd.uz</a></p>
          </div>
        </div>

        <div data-sc-spacer aria-hidden="true" />
      </main>

      <Engine />
    </>
  );
}
