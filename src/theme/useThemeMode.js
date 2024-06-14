// useThemeMode.js
import { useState, useEffect } from 'react';
import { lightTheme, darkTheme, systemTheme } from './theme';

const useThemeMode = () => {
    const getStoredTheme = () => {
        const storedTheme = localStorage.getItem('appTheme');
        if (storedTheme === 'dark') return darkTheme;
        if (storedTheme === 'system') return systemTheme;
        return lightTheme;
    };

    const [theme, setTheme] = useState(getStoredTheme);

    useEffect(() => {
        if (theme === systemTheme) {
            const matchMedia = window.matchMedia('(prefers-color-scheme: dark)');
            setTheme(matchMedia.matches ? darkTheme : lightTheme);

            const handleChange = (e) => {
                setTheme(e.matches ? darkTheme : lightTheme);
            };

            matchMedia.addListener(handleChange);
            return () => matchMedia.removeListener(handleChange);
        }
    }, [theme]);

    const handleThemeChange = (themeName) => {
        let newTheme;
        switch (themeName) {
            case 'light':
                newTheme = lightTheme;
                break;
            case 'dark':
                newTheme = darkTheme;
                break;
            case 'system':
                newTheme = systemTheme;
                break;
            default:
                newTheme = lightTheme;
        }
        setTheme(newTheme);
        localStorage.setItem('appTheme', themeName);
    };

    return [theme, handleThemeChange];
};

export default useThemeMode;
