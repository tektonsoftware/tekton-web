import { NextResponse } from "next/server";

/**
 * Demo request handler. For now this only logs to the server console
 * (visible in Vercel's function logs). It does NOT email, store, or forward
 * anything yet — see TODO.md for wiring it to a real inbox / CRM / Slack.
 *
 * This is the only non-static route in the app.
 */
export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const data = (payload ?? {}) as Record<string, unknown>;

  // Minimal validation — name and company are the only hard requirements.
  const name = typeof data.name === "string" ? data.name.trim() : "";
  const company = typeof data.company === "string" ? data.company.trim() : "";
  if (!name || !company) {
    return NextResponse.json(
      { ok: false, error: "Name and company are required." },
      { status: 422 }
    );
  }

  // TODO: replace console logging with a real destination (email/CRM/Slack).
  console.log("[demo request]", JSON.stringify(data));

  return NextResponse.json({ ok: true });
}
