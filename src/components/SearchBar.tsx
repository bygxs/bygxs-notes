// src/components/SearchBar.tsx

import { FiSearch } from "react-icons/fi";

export default function SearchBar({
  onSearch,
}: {
  onSearch: (query: string) => void;
}) {
  return (
    <div className="relative mb-6">
      <FiSearch className="absolute left-3 top-3 text-gray-400" />
      <input
        type="text"
        placeholder="Search notes..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full pl-10 pr-4 py-2 rounded-full border focus:outline-none focus:ring focus:ring-blue-500"
      />
    </div>
  );
}
