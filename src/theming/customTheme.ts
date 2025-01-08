import { createTheme, ThemeOptions } from '@mui/material/styles';
import { green, purple } from './color';
import { Padding } from '@mui/icons-material';


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
  components:{
    MuiDialog:{
      styleOverrides: {
        root: {
        '& .MuiDialog-container':{
          background: '#ffffff42',
          backdropFilter: 'blur(2px)',
        },
        '& .MuiPaper-root':{
          minWidth:'300px'
        }
        },
      },
    },
    MuiButton: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
      styleOverrides: {
        root: {
          variants: [
            {
              props: { variant: 'outlined' },
              style: {
                borderColor: '#888',
              },
            },
          ],
          fontWeight: 'bold',
          textTransform: 'unset',
          color: '#666',
          '&.Mui-disabled': {
            background: '#757575 !important',
            color: '#454545 !important',
          },
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&.MuiInputBase-root': {
            backgroundColor: '#ffffff',
            color: '#191919',
            caretColor: '#191919',
            
          },
          '& .MuiOutlinedInput-input': {
             padding: '10px',
          },
        },
      },
    },

    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontSize: 20,
          borderRadius: '6px 6px 0 0',
          fontWeight: 'bold',
          padding: '7px 24px',
          backgroundColor: '#222B36',
          boxShadow: '0px 4px 16px 0px #282828',
          color: '#ffffff',
           height:'45px'
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          color: '#ffffff',
          paddingTop: '25px !important',
          background: '#fff',
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          background: '#fff',
        },
      },
    },

    // MuiPaper: {
    //   styleOverrides: {
    //     root: {
    //       backgroundColor: 'inherit',
    //       boxShadow: 'none',
    //       backgroundImage: 'none',
    //       // filter: "drop-shadow(0px 4px 4px rgba(87, 87, 87, 0.25))",
    //     },
    //   },
    // },

    MuiTableRow: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff !important',
        },
      },
    },

    MuiTableCell: {
      styleOverrides: {
        root: {
          color: '#191919 !important',
        },
      },
    },

    MuiAutocomplete: {
      styleOverrides: {
        root: {
          backgroundColor: '#F9F9F9',
          color: '#191919',
          filter: 'drop-shadow(0px 4px 4px rgba(87, 87, 87, 0.25))',

          '& .MuiInputLabel-root': {
            color: '#191919 !important',
          },
          '& .MuiInputBase-root': {
            color: '#191919 !important',
            backgroundColor: 'unset !important',
          },
        },
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: {
          paddingTop: 10,
          paddingBottom: 10,
          backgroundColor: '#F9F9F9',
          color: '#191919',

          '&:hover': {
            backgroundColor: '#F1f1f1 !important',
            color: '#191919',
          },
          '&.Mui-selected': {
            backgroundColor: '#F1f1f1 !important',
            color: '#191919',
          },
        },
      },
    },
  }
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
    components: {
      MuiButton: {
        defaultProps: {
          // The props to change the default for.
          disableRipple: true, // No more ripple, on the whole application 💣!
        },
        styleOverrides: {
          root: {
            fontWeight: 'bold',
            textTransform: 'unset',
  
            '&.Mui-disabled': {
              background: '#757575',
              color: '#454545',
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            '&.MuiInputBase-root': {
              backgroundColor: '#ffffff',
              color: '#191919',
              caretColor: '#191919',
              
            },
            '& .MuiOutlinedInput-input': {
               padding: '10px',
            },
          },
        },
      },
      MuiDialog:{
        styleOverrides: {
          root: {
           '& .MuiDialog-container':{
            background: '#ffffff42',
            backdropFilter: 'blur(2px)',
           },
           '& .MuiPaper-root':{
            minWidth:'300px'
          }
          },
        },
      },
      MuiDialogTitle: {
        styleOverrides: {
          root: {
            fontSize: 20,
            borderRadius: '6px 6px 0 0',
            fontWeight: 'bold',
            padding: '7px 24px',
            backgroundColor: '#222B36',
            boxShadow: '0px 4px 16px 0px #282828',
            fontFamily:'Inter Regular',
            height:'45px'
          },
        },
      },
      MuiDialogContent: {
        styleOverrides: {
          root: {
            paddingTop: '25px !important',
            backgroundColor: '#19222c',
            fontFamily:'Inter Regular'
          },
        },
      },
      MuiDialogActions: {
        styleOverrides: {
          root: {
            backgroundColor: '#19222c',
            fontFamily:'Inter Regular'
          },
        },
      },
  
      // MuiPaper: {
      //   styleOverrides: {
      //     root: {
      //       backgroundColor: 'inherit',
      //       boxShadow: 'none',
      //       backgroundImage: 'none',
      //       // filter: "drop-shadow(0px 4px 4px rgba(87, 87, 87, 0.25))",
      //     },
      //   },
      // },
  
      MuiMenuItem: {
        styleOverrides: {
          root: {
            paddingTop: 10,
            paddingBottom: 10,
            backgroundColor: '#2E2E2E !important',
            color: '#f1f1f1',
  
            '&:hover': {
              backgroundColor: '#363636 !important',
              color: '#f1f1f1',
            },
            '&.Mui-selected': {
              backgroundColor: '#363636 !important',
              color: '#f1f1f1',
            },
          },
        },
      },
    },
  });

