/* // src/components/BottomNav.tsx
"use client";

import Link from "next/link";
import { FiHome, FiEdit, FiSettings } from "react-icons/fi";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg">
      <div className="flex justify-around items-center h-16">
        <Link href="/" className="flex flex-col items-center">
          <FiHome size={24} />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link href="/notes" className="flex flex-col items-center">
          <FiEdit size={24} />
          <span className="text-xs mt-1">Notes</span>
        </Link>
        <Link href="/settings" className="flex flex-col items-center">
          <FiSettings size={24} />
          <span className="text-xs mt-1">Settings</span>
        </Link>
      </div>
    </nav>
  );
}
 */