import { mockSnippets } from "@/lib/snippet-store";
// ✅ Add this to explicitly mark the route as dynamic
export const dynamic = "force-dynamic";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return new Response(
        JSON.stringify({ error: "Missing snippet id" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    console.log(mockSnippets);
    // Find snippet by share_link matching the id query param
    const snippet = Array.from(mockSnippets.values()).find(
      (s) => s.share_link === id
    );

    if (!snippet) {
      return new Response(
        JSON.stringify({ error: "Snippet not found" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Return the snippet data
    return new Response(
      JSON.stringify({ snippet }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "public, max-age=60"
        }
        
      }
    );
  } catch (error) {
    // Fallback error response
    console.error("Error in GET /get-snippet:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
