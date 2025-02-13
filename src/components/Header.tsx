import React from 'react';
import { Navigation } from './Navigation';

interface HeaderProps {
  isDarkMode: boolean;
  toggleMenu: () => void;
  handleAuthClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleMenu, handleAuthClick }) => {
  return (
    <header className={`flex justify-between items-center p-4 ${isDarkMode ? "bg-gray-800" : "bg-white"} shadow-md`}>
      <div className="text-2xl font-bold text-purple-600"> B   Y   G   X   S </div>
      <div className="flex flex-col items-center">
        <div className="text-2xl cursor-pointer" onClick={handleAuthClick}>
          👤
        </div>
        <div className="text-2xl cursor-pointer" onClick={toggleMenu}>
          ☰
        </div>
      </div>
    </header>
  );
};

export default Header;
