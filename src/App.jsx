// App.jsx
import React from 'react';
import { AppTheme } from './theme/AppTheme';
import ToggleTheme from './theme/ToggleTheme';
import useThemeMode from './theme/useThemeMode';
import AppTabs from './components/AppTabs';
import { AppRouter } from './router/AppRouter';
import { Box } from '@mui/material';

const App = () => {
  const [theme, handleThemeChange] = useThemeMode();

  return (
      <AppTheme theme={theme}>
          <ToggleTheme centered onThemeChange={handleThemeChange} />

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <h1>Bienvenido a la prueba de supabase</h1>
          </Box>

          <AppTabs />
          <AppRouter />

      </AppTheme>
  );
};

export default App;
