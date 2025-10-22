import React, { createContext, useState, useContext, useEffect } from 'react';
const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
export const useTheme = () => useContext(ThemeContext);
