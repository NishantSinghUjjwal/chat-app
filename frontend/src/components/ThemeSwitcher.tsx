// src/components/ThemeSwitcher.tsx
import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeSwitcher: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const handleThemeChange = (newTheme: "light" | "dark") => {
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div className="flex items-center space-x-2">
      {theme == "dark" ? (
        <button className="btn btn-circle bg-yellow-500" onClick={() => handleThemeChange("light")}>
          <FaSun className="text-gray-300 text-lg" />
        </button>
      ) : (
        <button className="btn btn-circle bg-gray-800" onClick={() => handleThemeChange("dark")}>
          <FaMoon className="text-gray-800 dark:text-gray-300 text-lg"  />
        </button>
      )}
    </div>
  );
};

export default ThemeSwitcher;
