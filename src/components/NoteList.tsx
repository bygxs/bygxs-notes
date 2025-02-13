// components/NoteList.tsx
import React from 'react';
import { FiTrash2, FiEdit } from "react-icons/fi";

interface Note {
    id: number;
    title: string;
    content: string;
    tags: string[];
}

interface NoteListProps {
    notes: Note[];
    darkMode: boolean;
    deleteNote: (id: number) => void;
    openEditModal: (note: Note) => void;
}

const NoteList: React.FC<NoteListProps> = ({ notes, darkMode, deleteNote, openEditModal }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {notes.map((note) => (
                <div
                    key={note.id}
                    className={`p-4 rounded-lg shadow ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"} relative`}
                >
                    <h3 className="font-bold mb-2">{note.title}</h3>
                    <p className="mb-2">{note.content}</p>
                    <div className="flex flex-wrap gap-1 mb-2">
                        {note.tags.map((tag, index) => (
                            <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
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
    );
};

export default NoteList;
