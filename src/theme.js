import { createTheme } from '@mui/material/styles';
import { green, purple, blue } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: green[500],
      lightBlue: '#f0f8ff',
      blue: blue[100]
    },
    secondary: {
      main: green[500],
    },
  },
});