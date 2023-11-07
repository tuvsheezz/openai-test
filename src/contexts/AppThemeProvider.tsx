import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
} from '@mui/material';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

export const lightTheme = createTheme({ palette: { mode: 'light' } });
export const darkTheme = createTheme({ palette: { mode: 'dark' } });

const ModeContext = createContext<{
  mode: 'light' | 'dark';
  toggleMode: () => void;
}>({
  mode: 'light',
  toggleMode: () => {},
} as never);

export const useMode = () => useContext(ModeContext);

export const AppThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  useEffect(() => {
    const savedMode = window.localStorage.getItem('mode');
    if (savedMode === 'dark') {
      setMode('dark');
      return;
    } else if (savedMode === 'light') {
      setMode('light');
      return;
    } else {
      setMode(prefersDarkMode ? 'dark' : 'light');
      window.localStorage.setItem('mode', prefersDarkMode ? 'dark' : 'light');
    }
  }, [prefersDarkMode]);

  const toggleMode = () => {
    setMode((mode) => (mode === 'light' ? 'dark' : 'light'));
    window.localStorage.setItem('mode', mode === 'light' ? 'dark' : 'light');
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ModeContext.Provider
      value={{
        mode,
        toggleMode,
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ModeContext.Provider>
  );
};
