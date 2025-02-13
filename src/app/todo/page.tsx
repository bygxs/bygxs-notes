"use client";

import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

export default function NotePage() {
  const [note, setNote] = useState("");
  const [savedNote, setSavedNote] = useState<string | null>(null);

  // Function to save note to Firestore
  const saveNoteToFirestore = async (note: string) => {
    try {
      await addDoc(collection(db, "notes"), {
        content: note,
        timestamp: new Date(),
      });
      console.log("Note saved successfully!");
      fetchSavedNotes(); // Refresh the saved note list after saving
    } catch (e) {
      console.error("Error saving note: ", e);
    }
  };

  // Function to fetch notes from Firestore
  const fetchSavedNotes = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "notes"));
      const notes = querySnapshot.docs.map((doc) => doc.data().content);
      setSavedNote(notes[0] || "No note found"); // Adjust if you want to show multiple notes
    } catch (e) {
      console.error("Error fetching notes: ", e);
    }
  };

  // Handle save button click
  const handleSaveNote = () => {
    if (note.trim()) {
      saveNoteToFirestore(note);
      setNote(""); // Clear the note input after saving
    }
  };

  // Handle fetch button click
  const handleFetchNote = () => {
    fetchSavedNotes(); // Fetch saved notes from Firestore
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 space-y-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl text-black font-semibold mb-4">Your Note:</h2>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full p-2 border text-black border-gray-300 rounded-md"
          placeholder="Write your note here..."
          rows={5}
        />
        <button
          onClick={handleSaveNote}
          className="mt-4 w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Save Note
        </button>
      </div>

      <div className="w-full max-w-md mt-6 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl text-black font-semibold mb-4">Saved Note:</h2>
        {savedNote ? (
          <p>{savedNote}</p>
        ) : (
          <p className="text-black text-black">No note found</p>
        )}
      </div>

      {/* Button to manually fetch the saved note */}
      <button
        onClick={handleFetchNote}
        className="mt-4 p-2 bg-green-500 text-white rounded-md hover:bg-green-600"
      >
        Retrieve Saved Note
      </button>
    </div>
  );
}
