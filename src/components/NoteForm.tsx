// src/components/NoteForm.tsx

import { useState } from "react";

export default function NoteForm({ onSubmit }: { onSubmit: (title: string, content: string) => void }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) return; // Prevent empty submissions
    onSubmit(title, content);
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
      <div className="mb-4">
        <label htmlFor="title" className="block font-bold mb-1">
          Title
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
          placeholder="Enter note title"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="content" className="block font-bold mb-1">
          Content
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={5}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
          placeholder="Enter note content"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
        Save Note
      </button>
    </form>
  );
}
