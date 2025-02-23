'use client';

import { useChat } from 'ai/react';
import { useState } from 'react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat',
  });

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-green-100">
        <div className="mb-4 pb-2 border-b border-green-100">
          <h2 className="text-lg font-semibold text-green-800">Sanjaya AI Farming Assistant</h2>
          <p className="text-sm text-green-600">Ask me anything about farming in Northeast India</p>
        </div>
        
        <div className="flex flex-col space-y-4 mb-4 h-[400px] overflow-y-auto">
          {messages.map((m, index) => (
            <div
              key={index}
              className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-4 rounded-lg ${
                  m.role === 'user'
                    ? 'bg-green-100 text-green-900'
                    : 'bg-white text-gray-800 border border-green-100'
                }`}
              >
                <div className="whitespace-pre-wrap">{m.content}</div>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Ask about farming techniques, crops, or soil management..."
            className="flex-1 p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white/80"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading}
            className={`px-6 py-3 rounded-lg ${
              isLoading
                ? 'bg-green-300'
                : 'bg-green-600 hover:bg-green-700'
            } text-white font-medium transition-colors duration-200`}
          >
            {isLoading ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              'Send'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}