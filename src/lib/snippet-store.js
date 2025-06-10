// lib/snippet-store.js

const _mockSnippets = global.mockSnippets || new Map();

if (!_mockSnippets.has("abc123")) {
  _mockSnippets.set("abc123", {
    title: "Example Snippet",
    language: "javascript",
    code: "console.log('Test');",
    created_at: new Date().toISOString(),
    share_link: "abc123",
  });
}

if (process.env.NODE_ENV !== "production") {
  global.mockSnippets = _mockSnippets;
}

export const mockSnippets = _mockSnippets;
