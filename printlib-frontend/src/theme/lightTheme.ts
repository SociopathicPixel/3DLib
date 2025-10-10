import { createTheme } from '@mui/material/styles';
import shadows from '@mui/material/styles/shadows';

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
      
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    button: { textTransform: 'none' },
  },
});
