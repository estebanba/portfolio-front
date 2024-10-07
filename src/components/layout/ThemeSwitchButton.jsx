import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export const ThemeSwitchButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const theme = isDarkMode ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [isDarkMode]);

  const handleThemeChange = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="theme-switch-wrapper">
      <button className="theme-switch-button" onClick={handleThemeChange}>
        {isDarkMode ? <Moon /> : <Sun />}
      </button>
    </div>
  );
};
