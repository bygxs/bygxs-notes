// src/app/lib/firestore.ts

import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "./firebase"; // Adjust the path if necessary

// Function to save a note
export const saveNote = async (userId: string, noteContent: string) => {
  try {
    const noteRef = doc(db, "notes", userId); // 'notes' is the collection
    await setDoc(noteRef, {
      content: noteContent,
      createdAt: new Date(),
    });
    console.log("Note saved successfully!");
  } catch (error) {
    console.error("Error saving note:", error);
  }
};

// Function to retrieve a note
export const getNote = async (userId: string) => {
  try {
    const noteRef = doc(db, "notes", userId);
    const docSnap = await getDoc(noteRef);
    if (docSnap.exists()) {
      return docSnap.data(); // Returns the note content
    } else {
      console.log("No such note!");
      return null;
    }
  } catch (error) {
    console.error("Error getting note:", error);
    return null;
  }
};