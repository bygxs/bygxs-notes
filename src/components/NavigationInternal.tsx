// app/components/Navigation.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 bg-gray-800 text-white rounded-full"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden">
          <ul className="py-1">
            <li>
              <Link
                href="/"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/notes"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Journal
              </Link>
            </li>

            {/* Add the link to Check  Drawing App */}
            <li>
              <Link
                href="/drawing"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Drawing App
              </Link>
            </li>

            {/* Add other existing links */}
            <li>
              <Link
                href="/gallery"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Art Show
              </Link>
            </li>

            <li>
              <Link
                href="/todo"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                intentions todo
              </Link>
            </li>

            <li>
              <Link
                href="/calander"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                calander
              </Link>
            </li>

            <li>
              <Link
                href="/chat"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                chat
              </Link>
            </li>

            <li>
              <Link
                href="/stories"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Stories
              </Link>
            </li>

            <li>
              <Link
                href="/podcast"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Podcast
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                privacy
              </Link>
            </li>



          </ul>
        </div>
      )}
    </nav>
  );
}
