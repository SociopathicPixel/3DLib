import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
      mode: 'dark',
      primary: { main: '#235215ff' },
      secondary: { main: '#83ad92ff' },
      background: {
        default: '#121212',
        paper: '#1e1e1e',
      },
      text: {
        primary: '#7a837aff',
        secondary: '#22cc5eff',
      },
  },
  typography: {
    fontFamily: "'Press Start 2P', monospace",
    button: { textTransform: 'none' },
  },
});
