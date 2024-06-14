// ToggleTheme.jsx
import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function ToggleTheme({ onThemeChange }) {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    '& > *': {
                        m: 1,
                    },
                }}
            >
                <ButtonGroup size="large" aria-label="Large button group">
                    <Button onClick={() => onThemeChange('light')}>light</Button>
                    <Button onClick={() => onThemeChange('dark')}>dark</Button>
                    <Button onClick={() => onThemeChange('system')}>system</Button>
                </ButtonGroup>
            </Box>
        </>
    );
}
