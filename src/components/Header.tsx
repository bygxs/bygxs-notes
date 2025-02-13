"use client";
import React from "react";
import { useAuth } from "@/hooks/useAuth"; // Adjust path to your useAuth hook
// import { signOut } from "firebase/auth";
// import { auth } from "@/lib/firebase"; // Adjust path if necessary
// import { useRouter } from "next/router"; // Import router for redirection

interface HeaderProps {
  isDarkMode: boolean;
  toggleMenu: () => void;
  handleAuthClick: () => void;
}

const Header: React.FC<HeaderProps> = ({
  isDarkMode,
  toggleMenu,
  handleAuthClick,
}) => {
  const { user } = useAuth(); // Get user from auth hook
  // const router = useRouter(); // To redirect after sign out

  // const handleSignOut = async () => {
  //   try {
  //     await signOut(auth);
  //     // router.push("/"); // Redirect to home after sign out
  //     // window.location.href = "/"; // Alternative redirection method
  //   } catch (error) {
  //     console.error("Error signing out:", error);
  //   }
  // };

  return (
    <header
      className={`flex justify-between items-center p-4 ${
        isDarkMode ? "bg-gray-800" : "bg-white"
      } shadow-md`}
    >
      <div className="flex-1 flex justify-center">
        {/* Center the title */}
        <div className="text-2xl font-bold text-purple-600">the BYGXS</div>
      </div>
      <div className="flex items-center space-x-4">
        {/* User Avatar or Profile Section */}
        <div className="text-2xl cursor-pointer" onClick={handleAuthClick}>
          👤
        </div>

        {/* Conditionally render Sign Out button */}
        {/* {user && (
          <button
            onClick={handleSignOut}
            className="text-lg text-red-500 hover:text-red-700"
          >
            Sign Out
          </button>
        )} */}

        {/* Hamburger Menu */}
        <div className="text-2xl cursor-pointer" onClick={toggleMenu}>
          ☰
        </div>
      </div>
    </header>
  );
};

export default Header;
