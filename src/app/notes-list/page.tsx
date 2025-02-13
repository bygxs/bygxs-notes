// src/app/notes/page.tsx

import NoteCard from "@/components/NoteCard";

export default function NotesPage() {
  const notes = [
    { id: 1, title: "Meeting Notes", content: "Discuss project deadlines and deliverables." },
    { id: 2, title: "Shopping List", content: "Milk, Bread, Eggs, Butter..." },
    { id: 3, title: "Ideas", content: "Brainstorm app ideas for next project." },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {notes.map((note) => (
        <NoteCard key={note.id} title={note.title} content={note.content} />
      ))}
    </div>
  );
}
