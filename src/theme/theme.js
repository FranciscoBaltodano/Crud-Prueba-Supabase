// themes.js
import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

export const systemTheme = createTheme({
    palette: {
        mode: 'light', // This will be dynamically changed to match system preference
    },
});
