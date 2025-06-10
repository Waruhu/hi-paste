"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

function MainComponent() {
  const { id } = useParams();

  const [snippet, setSnippet] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!id) return; // optional guard

    const fetchSnippet = async () => {
      try {
        console.log("Fetching snippet id:", id);
        const response = await fetch(`/api/get-snippet?id=${id}`);

        if (!response.ok) {
          throw new Error("Failed to fetch snippet");
        }

        const data = await response.json();
        setSnippet(data.snippet);
      } catch (err) {
        setError(err.message || "Snippet not found or has expired");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSnippet();
  }, [id]); // add id to dependency array

  const copyToClipboard = async () => {
    if (snippet?.code) {
      await navigator.clipboard.writeText(snippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="max-w-md text-center">
          <div className="text-xl text-red-600 mb-4">{error}</div>
          <a href="/" className="text-blue-600 hover:text-blue-800 underline">
            Share a new code snippet
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            {snippet.title && (
              <h1 className="text-2xl font-bold text-gray-900 mb-4 font-roboto">
                {snippet.title}
              </h1>
            )}

            <div className="flex justify-between items-center mb-4">
              <div className="text-sm text-gray-600">
                <span className="font-medium">Language:</span>{" "}
                {snippet.language.charAt(0).toUpperCase() +
                  snippet.language.slice(1)}
              </div>
              <button
                onClick={copyToClipboard}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center gap-2"
              >
                <i className={`fas ${copied ? "fa-check" : "fa-copy"}`}></i>
                {copied ? "Copied!" : "Copy Code"}
              </button>
            </div>

            <pre className="bg-gray-50 p-4 rounded-md overflow-x-auto">
              <code className="font-mono text-sm whitespace-pre">
                {snippet.code}
              </code>
            </pre>

            <div className="mt-4 text-sm text-gray-500">
              <span className="font-medium">Created:</span>{" "}
              {new Date(snippet.created_at).toLocaleDateString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
