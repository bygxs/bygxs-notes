// src/components/NoteCard.tsx

interface NoteCardProps {
  title: string;
  content: string;
}

export default function NoteCard({ title, content }: NoteCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition">
      <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
        {content || "No content available."}
      </p>
    </div>
  );
}
