import { useMemo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectIsDarkMode } from 'redux/themeMode/selectors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

//theme provider
export const ThemeModeContext = ({ children }) => {
  const isDarkMode = useSelector(selectIsDarkMode);
  const themeMode = isDarkMode ? 'dark' : 'light';

  //create material theme
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode,
        },
      }),
    [themeMode]
  );

  //change bg color in page
  useEffect(() => {
    document.body.style.backgroundColor = theme.palette.background.default;
  }, [theme]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
