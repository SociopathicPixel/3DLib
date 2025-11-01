import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#2e1551ff' },
    secondary: { main: '#5a74db' },
    background: {
      default: '#306fb1ff',
      paper: '#0f4987ff',
    },
    text: {
      primary: '#000000',
      secondary: '#003300',
    },
  },
  typography: {
    fontFamily: "'Press Start 2P', monospace",
    button: { textTransform: 'none' },
  },
});
