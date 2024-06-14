// AppTheme.jsx
import { ThemeProvider } from '@emotion/react'
import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
export const AppTheme = ({ children, theme }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}
