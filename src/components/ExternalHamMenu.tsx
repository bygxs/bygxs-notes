import React from "react";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth"; // Import the custom hook for authentication
import { signOut } from "firebase/auth"; // Firebase sign out method
import { auth } from "@/lib/firebase"; // Firebase auth instance

interface ExternalMenuProps {
  isDarkMode: boolean;
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const ExternalMenu: React.FC<ExternalMenuProps> = ({
  isDarkMode,
  isMenuOpen,
  toggleMenu,
}) => {
  const { user } = useAuth(); // Get the user from the useAuth hook

  const handleSignOut = async () => {
    try {
      await signOut(auth); // Sign out logic using Firebase
      console.log("Signed out successfully");
      // Optionally, you can redirect the user or show a message
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 bottom-0 w-64 ${
        isDarkMode ? "bg-gray-800" : "bg-white"
      } p-4 transition-transform duration-300 ease-in-out z-50 ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <button onClick={toggleMenu} className="absolute top-4 right-4 text-2xl">
        &times;
      </button>

      {/* Links */}
      {["About", "Contact", "Service", "Privacy", "Settings"].map((item) => (
        <Link
          key={item}
          href={`/${item.toLowerCase()}`}
          className="block py-2 hover:text-purple-600"
        >
          {item}
        </Link>
      ))}

      {/* Conditionally render Sign Out button if user is logged in */}
      {user ? (
        <button
          onClick={handleSignOut} // Trigger sign-out when clicked
          className="block py-2 text-red-500 hover:text-red-700"
        >
          Sign Out
        </button>
      ) : null}
    </nav>
  );
};

export default ExternalMenu;

/* import React from "react";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";  // Import the custom hook for authentication
import { signOut } from "firebase/auth";  // Firebase sign out method
import { auth } from "@/lib/firebase";  // Firebase auth instance

interface HamburgerMenuProps {
  isDarkMode: boolean;
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  isDarkMode,
  isMenuOpen,
  toggleMenu,
}) => {
  const { user } = useAuth();  // Get the user from the useAuth hook
  
  const handleSignOut = async () => {
    try {
      await signOut(auth);  // Sign out logic using Firebase
      console.log("Signed out successfully");
      // Optionally, you can redirect the user or show a message
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 bottom-0 w-64 ${
        isDarkMode ? "bg-gray-800" : "bg-white"
      } p-4 transition-transform duration-300 ease-in-out z-50 ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <button onClick={toggleMenu} className="absolute top-4 right-4 text-2xl">
        &times;
      </button>
      
     
      {["About", "Contact", "Service", "Privacy", "Settings"].map((item) => (
        <Link
          key={item}
          href={`/${item.toLowerCase()}`}
          className="block py-2 hover:text-purple-600"
        >
          {item}
        </Link>
      ))}

      {user ? (
        <button
          onClick={handleSignOut}  // Trigger sign-out when clicked
          className="block py-2 text-red-500 hover:text-red-700"
        >
          Sign Out
        </button>
      ) : null}
    </nav>
  );
};

export default HamburgerMenu;
 */
