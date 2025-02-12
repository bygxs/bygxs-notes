// src/app/notes/[id]/page.tsx
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

interface Note {
  id: number;
  title: string;
  content: string;
  tags: string[];
}

interface NoteDetailPageProps {
  params: {
    id: string;
  };
  note: Note | null;
}

export default function NoteDetailPage({ params, note }: NoteDetailPageProps) {
  const router = useRouter();

  useEffect(() => {
    if (!note) {
      router.push('/');
    }
  }, [note, router]);

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

// Fetching the note data based on the id
export async function getStaticProps({ params }: { params: { id: string } }) {
  const savedNotes = localStorage.getItem("notes");
  let note: Note | null = null;

  if (savedNotes) {
    const notesArray: Note[] = JSON.parse(savedNotes);
    note = notesArray.find((n) => n.id === Number(params.id)) || null;
  }

  return {
    props: {
      params,
      note,
    },
  };
}

// This function is required for dynamic routes
export async function getStaticPaths() {
  // You can fetch the list of notes here to generate paths
  const savedNotes = localStorage.getItem("notes");
  const notesArray: Note[] = savedNotes ? JSON.parse(savedNotes) : [];

  const paths = notesArray.map((note) => ({
    params: { id: note.id.toString() },
  }));

  return { paths, fallback: true }; // or 'blocking' based on your needs
}
