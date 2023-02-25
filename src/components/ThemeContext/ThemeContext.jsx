import { createContext, useMemo, useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export const ThemeColorModeContext = createContext();

export const ThemeModeContext = ({ children }) => {
  const [themeMode, setThemeMode] = useState('light');

  const colorThemeMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setThemeMode(prevThemeMode =>
          prevThemeMode === 'light' ? 'dark' : 'light'
        );
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode,
        },
      }),
    [themeMode]
  );

  useEffect(() => {
    document.body.style.backgroundColor = theme.palette.background.default;
  }, [theme]);

  return (
    <ThemeColorModeContext.Provider value={colorThemeMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeColorModeContext.Provider>
  );
};
