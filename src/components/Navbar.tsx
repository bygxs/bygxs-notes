// src/components/Navbar.tsx

import { FiMoon, FiSun } from "react-icons/fi";

export default function Navbar({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}) {
  return (
    <nav
      className={`flex justify-between items-center p-4 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100"
      }`}
    >
      <h1 className="text-2xl font-bold">NoteApp</h1>
      <div className="flex items-center space-x-4">
        {/* Dark/Light Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>

        {/* User Avatar Placeholder */}
        <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden cursor-pointer">
          <img
            src="/user-avatar.jpg" // Replace with your avatar image
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </nav>
  );
}
