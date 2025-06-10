"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

function MainComponent() {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [title, setTitle] = useState("");
  const [ttl, setTtl] = useState("86400"); // 1 day in seconds
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [copied, setCopied] = useState(false);

  const languages = [
    "javascript", "python", "java", "cpp", "csharp", "php", "ruby", "swift",
    "go", "rust", "typescript", "kotlin", "sql", "html", "css",
  ];

  const languageColors = {
    javascript: "#f7df1e", python: "#3776ab", java: "#007396", cpp: "#00599c",
    csharp: "#239120", php: "#777bb4", ruby: "#cc342d", swift: "#ffac45",
    go: "#00add8", rust: "#000000", typescript: "#3178c6", kotlin: "#0095d5",
    sql: "#f29111", html: "#e34c26", css: "#264de4",
  };

  const ttlOptions = [
    { value: "3600", label: "1 Hour" },
    { value: "21600", label: "6 Hours" },
    { value: "43200", label: "12 Hours" },
    { value: "86400", label: "1 Day" },
    { value: "172800", label: "2 Days" },
    { value: "604800", label: "1 Week" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch("/api/create-snippet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, language, title, ttl: parseInt(ttl, 10) }),
      });

      if (!response.ok) {
        throw new Error("Failed to create snippet");
      }

      const data = await response.json();
      setSuccess({
        message: "Snippet created successfully!",
        link: `/snippet/${data.snippet.share_link}`,
      });

      setTimeout(() => {
        router.push(`/snippet/${data.snippet.share_link}`);
      }, 1000);
    } catch (err) {
      setError("Failed to share code. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async () => {
    if (success?.link) {
      await navigator.clipboard.writeText(
        `${window.location.origin}${success.link}`
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 font-roboto">
            Hi-paste
          </h1>
          <p className="text-lg text-gray-600">
            Share your code snippets easily with expiration time
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white shadow-lg rounded-lg p-6"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title (optional)
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter a title for your code snippet"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Programming Language
              </label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ backgroundColor: languageColors[language] + "20" }}
              >
                {languages.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang.charAt(0).toUpperCase() + lang.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Expiration Time
              </label>
              <select
                value={ttl}
                onChange={(e) => setTtl(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {ttlOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Code
            </label>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-64 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
              placeholder="Paste your code here..."
              style={{ backgroundColor: languageColors[language] + "10" }}
            />
          </div>

          {error && <div className="text-red-600 text-sm">{error}</div>}

          {success && (
            <div className="bg-green-50 p-4 rounded-md">
              <p className="text-green-800 mb-2">{success.message}</p>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={`${window.location.origin}${success.link}`}
                  readOnly
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md bg-white"
                />
                <button
                  type="button"
                  onClick={copyToClipboard}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={loading || !code}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-400"
          >
            {loading ? "Sharing..." : "Share Code"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default MainComponent;
