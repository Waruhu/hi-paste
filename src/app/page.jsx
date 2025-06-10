"use client";
import React from "react";

function MainComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4 font-roboto">
            Hi-paste
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Share your code snippets easily and securely
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="/new"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <i className="fas fa-plus mr-2"></i>
              Create New Snippet
            </a>
            <a
              href="/admin"
              className="inline-flex items-center px-6 py-3 bg-white text-gray-700 rounded-lg hover:bg-gray-50 border border-gray-300 transition-colors"
            >
              <i className="fas fa-list mr-2"></i>
              View Your Snippets
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-blue-600 text-3xl mb-4">
              <i className="fas fa-bolt"></i>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2 font-roboto">
              Quick Sharing
            </h2>
            <p className="text-gray-600">
              Share your code snippets instantly with anyone, anywhere
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-blue-600 text-3xl mb-4">
              <i className="fas fa-clock"></i>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2 font-roboto">
              Time Control
            </h2>
            <p className="text-gray-600">
              Set expiration times for your snippets for better security
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-blue-600 text-3xl mb-4">
              <i className="fas fa-code"></i>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2 font-roboto">
              Multiple Languages
            </h2>
            <p className="text-gray-600">
              Support for all major programming languages with syntax
              highlighting
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600">© 2025 Hi-paste. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
