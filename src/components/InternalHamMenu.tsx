"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth"; // Importing the useAuth hook

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth(); // Get the user status from useAuth

  const handleSignOut = () => {
    // Handle sign-out logic here, e.g. Firebase sign-out
    console.log("User signed out");
  };

  return (
    <nav className="fixed top-0 left-0 bottom-0 w-64 bg-white p-4 transition-transform duration-300 ease-in-out z-50">
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
            {/* List of Links */}
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
            <li>
              <Link
                href="/drawing"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Drawing App
              </Link>
            </li>
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
                Intentions To Do
              </Link>
            </li>
            <li>
              <Link
                href="/calendar"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Calendar
              </Link>
            </li>
            <li>
              <Link
                href="/chat"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Chat
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
                Privacy
              </Link>
            </li>

            {/* Conditionally render Sign Out button if the user is logged in */}
            {user && (
              <button
                onClick={handleSignOut}
                className="block px-4 py-2 text-sm text-red-500 hover:bg-red-100"
              >
                Sign Out
              </button>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}
