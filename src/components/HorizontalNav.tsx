import React, { useState } from "react";
import Link from "next/link";

interface HorizontalNavProps {
  isDarkMode: boolean;
  menuItems: Record<string, string[]>;
  myArt: string[];
  museumsArt: string[];
}

const HorizontalNav: React.FC<HorizontalNavProps> = ({
  isDarkMode,
  menuItems,
  myArt,
  museumsArt,
}) => {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [hoveredSubMenu, setHoveredSubMenu] = useState<string | null>(null);

  return (
    <nav
      className={`${isDarkMode ? "text-gray-300" : "text-gray-700"} py-2`}
      onMouseLeave={() => {
        setHoveredMenu(null);
        setHoveredSubMenu(null);
      }}
    >
      <ul className="flex flex-row justify-start items-center overflow-x-auto whitespace-nowrap">
        {Object.keys(menuItems).map((item) => (
          <li
            key={item}
            className="relative"
            onMouseEnter={() => setHoveredMenu(item)}
          >
            <button
              className={`px-4 py-2 text-sm font-medium ${
                hoveredMenu === item ? "text-purple-600" : "text-gray-300"
              } hover:text-purple-600 focus:outline-none flex items-center`}
            >
              {item}
              <span
                className={`ml-1 transform ${
                  hoveredMenu === item ? "rotate-180" : ""
                } transition-transform duration-200`}
              >
                ▼
              </span>
            </button>
          </li>
        ))}
      </ul>
      {hoveredMenu && (
        <div className="mt-2 py-2 bg-purple-600 shadow-md">
          <ul className="flex flex-row justify-start items-start overflow-x-auto whitespace-nowrap">
            {hoveredMenu === "Styles" ? (
              <>
                <li
                  className="relative"
                  onMouseEnter={() => setHoveredSubMenu("myArt")}
                  onMouseLeave={() => setHoveredSubMenu(null)}
                >
                  <button className="px-4 py-2 text-sm text-blue-200 hover:text-pink-300">
                    My Art
                  </button>
                  {hoveredSubMenu === "myArt" && (
                    <ul className="bg-purple-800 mt-1">
                      {myArt.map((art) => (
                        <li key={art}>
                          <Link
                            href={`/art/myArt/${art
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="px-4 py-2 text-sm text-blue-200 hover:text-pink-300"
                          >
                            {art}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                <li
                  className="relative"
                  onMouseEnter={() => setHoveredSubMenu("museumsArt")}
                  onMouseLeave={() => setHoveredSubMenu(null)}
                >
                  <button className="px-4 py-2 text-sm text-blue-200 hover:text-pink-300">
                    Museums Art
                  </button>
                  {hoveredSubMenu === "museumsArt" && (
                    <ul className="bg-purple-800 mt-1">
                      {museumsArt.map((art) => (
                        <li key={art}>
                          <Link
                            href={`/art/museumsArt/${art
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="px-4 py-2 text-sm text-blue-200 hover:text-pink-300"
                          >
                            {art}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </>
            ) : (
              menuItems[hoveredMenu].map((subItem) => (
                <li key={subItem}>
                  <Link
                    href={`/${hoveredMenu.toLowerCase()}/${subItem
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="px-4 py-2 text-sm text-blue-200 hover:text-pink-300"
                  >
                    {subItem}
                  </Link>
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default HorizontalNav;
