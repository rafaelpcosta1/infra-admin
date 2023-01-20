import { createTheme } from '@mui/material';

export const DarkTheme = createTheme ({
  palette: {
    primary: {
      main: '#0d47a1',
      dark: '#0b377a;',
      light: '#0f51b9',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#161616',
      dark: '#151515',
      light: '#191919',
      contrastText: '#ffffff',
    },
    background: {
      default: '#121212',
      paper: '#262626',
    }
  }
});
