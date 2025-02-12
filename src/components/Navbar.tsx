import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-white dark:bg-gray-800">
      <div className="text-lg font-bold">
        <Link href="/">Notebook</Link>
      </div>
      <div className="flex space-x-4">
        <Link href="/notes">Previous Notes</Link>
        <Link href="/settings">Account Settings</Link>
        <button onClick={toggleDarkMode} className="p-2">
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
