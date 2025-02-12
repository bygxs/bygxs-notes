// app/page.tsx
"use client";
import { useState } from "react";
import { FiPlus, FiSearch, FiMoon, FiSun, FiX, FiTrash2, FiEdit } from "react-icons/fi";

interface Note {
  id: number;
  title: string;
  content: string;
}

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [notes, setNotes] = useState<Note[]>([
    { id: 1, title: "First Note", content: "This is the first note." },
    { id: 2, title: "Second Note", content: "This is the second note." },
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentNote, setCurrentNote] = useState<Note | null>(null);

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addOrUpdateNote = () => {
    if (currentNote?.title && currentNote?.content) {
      if (currentNote.id) {
        setNotes(notes.map(note => note.id === currentNote.id ? currentNote : note));
      } else {
        setNotes([...notes, { ...currentNote, id: Date.now() }]);
      }
      setIsModalOpen(false);
      setCurrentNote(null);
    }
  };

  const deleteNote = (id: number) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const openEditModal = (note: Note) => {
    setCurrentNote(note);
    setIsModalOpen(true);
  };

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100"}`}>
      <nav className="flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">NoteApp</h1>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
          <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden cursor-pointer">
            <img
              src="/user-avatar.jpg"
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </nav>

      <main className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">My Notes</h2>
          <button
            onClick={() => {setCurrentNote({ id: 0, title: "", content: "" }); setIsModalOpen(true);}}
            className="bg-blue-500 text-white px-4 py-2 rounded-full flex items-center"
          >
            <FiPlus className="mr-2" /> New Note
          </button>
        </div>

        <div className="relative mb-6">
          <FiSearch className="absolute left-3 top-3 text-gray-400 dark:text-gray-500" />
          <input
            type="text"
            placeholder="Search notes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full pl-10 pr-4 py-2 rounded-full border focus:outline-none focus:ring ${
              darkMode
                ? "bg-gray-700 text-white placeholder-gray-400 border-gray-600 focus:ring-blue-500"
                : "bg-white text-gray-900 placeholder-gray-500 border-gray-300 focus:ring-blue-500"
            }`}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredNotes.map((note) => (
            <div
              key={note.id}
              className={`p-4 rounded-lg shadow ${
                darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
              } relative`}
            >
              <h3 className="font-bold mb-2">{note.title}</h3>
              <p>{note.content}</p>
              <button
                onClick={() => deleteNote(note.id)}
                className="absolute top-2 right-2 text-red-500 hover:text-red-700"
              >
                <FiTrash2 size={18} />
              </button>
              <button
                onClick={() => openEditModal(note)}
                className="absolute top-2 right-8 text-blue-500 hover:text-blue-700"
              >
                <FiEdit size={18} />
              </button>
            </div>
          ))}
        </div>
      </main>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className={`bg-white dark:bg-gray-800 p-6 rounded-lg w-96 ${darkMode ? "text-white" : "text-black"}`}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">{currentNote?.id ? "Edit Note" : "Create New Note"}</h3>
              <button onClick={() => {setIsModalOpen(false); setCurrentNote(null);}} className="text-gray-500 hover:text-gray-700">
                <FiX size={24} />
              </button>
            </div>
            <input
              type="text"
              placeholder="Note Title"
              value={currentNote?.title || ""}
              onChange={(e) => setCurrentNote({...currentNote!, title: e.target.value})}
              className={`w-full p-2 mb-4 border rounded ${
                darkMode ? "bg-gray-700 text-white" : "bg-white text-black"
              }`}
            />
            <textarea
              placeholder="Note Content"
              value={currentNote?.content || ""}
              onChange={(e) => setCurrentNote({...currentNote!, content: e.target.value})}
              className={`w-full p-2 mb-4 border rounded ${
                darkMode ? "bg-gray-700 text-white" : "bg-white text-black"
              }`}
              rows={4}
            />
            <button
              onClick={addOrUpdateNote}
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              {currentNote?.id ? "Update Note" : "Add Note"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
