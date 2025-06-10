import { NextResponse } from "next/server";
import { mockSnippets } from "@/lib/snippet-store";

async function handler({ code, language, title, ttl = 86400 }) {
  if (!code || !language) {
    return NextResponse.json({ error: "Code and language are required" }, { status: 400 });
  }

  const shareLink = crypto.randomUUID();
  const snippet = {
    id: crypto.randomUUID(),
    code,
    language,
    title,
    created_at: new Date().toISOString(),
    share_link: shareLink,
  };

  mockSnippets.set(shareLink, snippet);

  return NextResponse.json({ snippet });
}

export async function POST(request) {
  try {
    const body = await request.json();
    return handler(body);
  } catch (error) {
    return NextResponse.json({ error: "Invalid JSON or server error" }, { status: 400 });
  }
}
