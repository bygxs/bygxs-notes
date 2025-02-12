// app/page.tsx

"use client";
import { useState, useEffect } from "react";
import {
  FiPlus,
  FiSearch,
  FiMoon,
  FiSun,
  FiX,
  FiTrash2,
  FiEdit,
  FiTag,
} from "react-icons/fi";

interface Note {
  id: number;
  title: string;
  content: string;
  tags: string[];
}

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [notes, setNotes] = useState<Note[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentNote, setCurrentNote] = useState<Note | null>(null);
  const [tagInput, setTagInput] = useState("");

  // Load notes from local storage on initial render
  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  // Save notes to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  const addOrUpdateNote = () => {
    if (currentNote?.title || currentNote?.content) {
      if (currentNote.id) {
        setNotes(
          notes.map((note) => (note.id === currentNote.id ? currentNote : note))
        );
      } else {
        setNotes([...notes, { ...currentNote, id: Date.now(), tags: [] }]);
      }
      setIsModalOpen(false);
      setCurrentNote(null);
    }
  };

  const deleteNote = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const openEditModal = (note: Note) => {
    setCurrentNote(note);
    setIsModalOpen(true);
  };

  const addTag = () => {
    if (tagInput && currentNote) {
      setCurrentNote({
        ...currentNote,
        tags: [...new Set([...currentNote.tags, tagInput.toLowerCase()])],
      });
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    if (currentNote) {
      setCurrentNote({
        ...currentNote,
        tags: currentNote.tags.filter((tag) => tag !== tagToRemove),
      });
    }
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-500"
      }`}
    >
      <nav className="flex justify-between items-center p-4">
        <h1 className="items-end justify-end text-2xl font-bold text-gray-800 dark:text-gray-200 text-right">
          NoteApp
        </h1>
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
          <h2 className="text-xl font-bold"></h2>
          <button
            onClick={() => {
              setCurrentNote({ id: 0, title: "", content: "", tags: [] });
              setIsModalOpen(true);
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded-full flex items-center"
          >
            <FiPlus className="mr-2" /> New Note
          </button>
        </div>

        <div className="relative mb-6">
          <FiSearch className="absolute left-3 top-3 text-gray-400 dark:text-gray-500" />
          <input
            type="text"
            placeholder="Search notes or tags..."
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
              <p className="mb-2">{note.content}</p>
              <div className="flex flex-wrap gap-1 mb-2">
                {note.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button
                onClick={() => deleteNote(note.id)}
                className="absolute top-2 right-2 text-red-500 hover:text-red-700"
              >
                <FiTrash2 size={18} />
              </button>
              <button
                onClick={() => openEditModal(note)}
                className="absolute top-2 right-[40px] text-blue-500 hover:text-blue-700"
              >
                <FiEdit size={18} />
              </button>
            </div>
          ))}
        </div>
      </main>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div
            className={`bg-white dark:bg-gray-800 p-8 rounded-lg w-full sm:w-[500px] lg:w-[600px] min-h-[500px] ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            <button
              onClick={() => {
                setIsModalOpen(false);
                setCurrentNote(null);
              }}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <FiX size={24} />
            </button>
            <input
              type="text"
              placeholder="Note Title"
              value={currentNote?.title || ""}
              onChange={(e) =>
                setCurrentNote({ ...currentNote!, title: e.target.value })
              }
              className={`w-full p-4 mb-4 border rounded-xl focus:ring-2 ${
                darkMode ? "bg-gray-700 text-white" : "bg-white text-black"
              }`}
            />
            <textarea
              placeholder="Write your note content here..."
              value={currentNote?.content || ""}
              onChange={(e) =>
                setCurrentNote({ ...currentNote!, content: e.target.value })
              }
              className={`w-full p-4 mb-4 border rounded-xl focus:ring-2 ${
                darkMode ? "bg-gray-700 text-white" : "bg-white text-black"
              }`}
              rows={6}
            />
            <div className="flex mb-4">
              <input
                type="text"
                placeholder="Add tag"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                className={`flex-grow p-4 border rounded-l-xl focus:ring-2 ${
                  darkMode ? "bg-gray-700 text-white" : "bg-white text-black"
                }`}
              />
              <button
                onClick={addTag}
                className="bg-blue-500 text-white px-6 py-4 rounded-r-xl hover:bg-blue-600"
              >
                <FiTag size={20} />
              </button>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {currentNote?.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 flex items-center"
                >
                  {tag}
                  <button
                    onClick={() => removeTag(tag)}
                    className="ml-1 text-red-500 hover:text-red-700"
                  >
                    <FiX size={14} />
                  </button>
                </span>
              ))}
            </div>
            <button
              onClick={addOrUpdateNote}
              className="w-full bg-blue-500 text-white p-4 rounded-xl hover:bg-blue-600"
            >
              {currentNote?.id ? "Update Note" : "Add Note"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
