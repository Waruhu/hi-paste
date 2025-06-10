import { mockSnippets } from "@/lib/snippet-store";

export async function GET() {
  try {
    const snippets = Array.from(mockSnippets.values());

    return new Response(
      JSON.stringify({ snippets }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "public, max-age=60"
        }
      }
    );
  } catch (error) {
    console.error("Error in GET /list-snippets:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
