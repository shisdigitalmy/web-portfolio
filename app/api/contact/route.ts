import { NextResponse } from "next/server";

// Simple rate limit in memory (per instance)
const hits = new Map<string, number[]>();
function rateLimit(ip: string) {
  const now = Date.now();
  const arr = (hits.get(ip) || []).filter(t => now - t < 60_000);
  arr.push(now);
  hits.set(ip, arr);
  return arr.length <= 5;
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for") || "local";
  if (!rateLimit(ip)) return NextResponse.json({error:"Too many"}, {status:429});
  const body = await req.json().catch(()=>null);
  if (!body?.nama || !body?.whatsapp) return NextResponse.json({error:"Missing"}, {status:400});
  // TODO: forward to email/Resend — for MVP just log
  console.log("Contact:", body);
  return NextResponse.json({ok:true});
}
