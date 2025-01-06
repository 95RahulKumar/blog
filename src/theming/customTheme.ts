import { createTheme, ThemeOptions } from '@mui/material/styles';
import { green, purple } from './color';


export const themeLight:ThemeOptions = createTheme({
    palette: {
         mode:'light',
      primary: {
        main: green[500],
      },
      secondary: {
        main: purple[500],
      },
    },
  });


export const themeDark:ThemeOptions = createTheme({
    palette: {
         mode:'dark',
      primary: {
        main: purple[500],
      },
      secondary: {
        main: purple[500],
      },
      background: {
        default: '#111623', 
        paper: '#111623', 
      },
    },
  });

