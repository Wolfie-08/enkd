// Vercel serverless function: POST /api/contact → email via Resend to diyorbek@enkd.uz.
// Needs RESEND_API_KEY in Vercel env. Locally: `vercel dev` (vite dev has no /api).

const TO = "diyorbek@enkd.uz";
const FROM = "Portfolio <contact@inbox.enkd.uz>"; // inbox.enkd.uz is verified in Resend

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

export async function POST(req: Request): Promise<Response> {
  const key = process.env.RESEND_API_KEY;
  if (!key) return Response.json({ error: "RESEND_API_KEY not set" }, { status: 500 });

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const field = (k: string, max: number) =>
    typeof body[k] === "string" ? (body[k] as string).trim().slice(0, max) : "";
  const name = field("name", 100);
  const email = field("email", 200);
  const subject = field("subject", 200) || "New message from enkd.uz";
  const message = field("message", 5000);
  const website = field("website", 100); // honeypot: real users never fill this

  if (website) return Response.json({ ok: true }); // silently drop bots
  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "name, valid email and message are required" }, { status: 400 });
  }

  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: FROM,
      to: [TO],
      reply_to: email,
      subject: `[enkd.uz] ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `<p><b>${esc(name)}</b> &lt;${esc(email)}&gt;</p><p style="white-space:pre-wrap">${esc(message)}</p>`,
    }),
  });

  if (!r.ok) {
    console.error("resend", r.status, await r.text());
    return Response.json({ error: "Email delivery failed" }, { status: 502 });
  }
  return Response.json({ ok: true });
}
