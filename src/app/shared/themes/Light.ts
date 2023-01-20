import { createTheme } from '@mui/material';

export const LigthTheme = createTheme ({
  palette: {
    primary: {
      main: '#0062ac',
      dark: '#005392',
      light: '#0071c6',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ffffff',
      dark: '#cccccc',
      light: '#ECF0F1',
      contrastText: '#000000',
    },
    background: {
      default: '#ECF0F1',
      paper: '#ffffff',
    }
  }
});
