import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export const ThemeSwitchButton = () => {
  //   const [isDarkMode, setIsDarkMode] = useState(() => {
  //     return localStorage.getItem("isDarkMode");
  //   });

  const [isDarkMode, setIsDarkMode] = useState();

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches === true) {
      setIsDarkMode(true);
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  useEffect(() => {
    const theme = isDarkMode === true ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    //   localStorage.setItem("isDarkMode", isDarkMode);
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
