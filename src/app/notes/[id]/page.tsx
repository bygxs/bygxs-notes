// app/notes/[id]/page.tsx
"use client";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

interface Note {
  id: number;
  title: string;
  content: string;
  tags: string[];
}

export default function NoteDetailPage({ params }: { params: { id: string } }) {
  const [note, setNote] = useState<Note | null>(null);
  const { id } = params;
  const router = useRouter();

  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      const notesArray: Note[] = JSON.parse(savedNotes);
      const foundNote = notesArray.find((note) => note.id === Number(id));
      if (foundNote) {
        setNote(foundNote);
      } else {
        router.push('/');
      }
    } else {
      router.push('/');
    }
  }, [id, router]);

  if (!note) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{note.title}</h1>
      <p className="text-gray-700">{note.content}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {note.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
