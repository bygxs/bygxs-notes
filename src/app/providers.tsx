// src/app/providers.tsx
"use client";

import React, { createContext, useState, useEffect } from "react";

export const DarkModeContext = createContext({
  darkMode: false,
  setDarkMode: (value: boolean) => {},
});

export function Providers({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={darkMode ? "dark" : ""}>
        {children}
      </div>
    </DarkModeContext.Provider>
  );
}
