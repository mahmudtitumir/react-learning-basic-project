import { useEffect, useState } from 'react';
import { ThemeContext } from './ThemeContext';

export const ThemeProvider = ({ children }) => {
    const [themeMode, setThemeMode] = useState('light');
    const darkMode = () => setThemeMode('dark');
    const lightMode = () => setThemeMode('light');
    useEffect(() => {
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(themeMode);
    }, [themeMode]);
    return (
        <ThemeContext.Provider value={{ themeMode, darkMode, lightMode }}>
            {children}
        </ThemeContext.Provider>
    );
};
