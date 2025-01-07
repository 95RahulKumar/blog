import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import './Header.scss'
import { Drawer, List, ListItem, ListItemButton, ListItemText, useTheme } from '@mui/material';
import { useThemeSwitcher } from '@hooks/useThemeSwitcher';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const [hamDrawer, setHamDrawer] = React.useState(false);
   const {toggleTheme} = useThemeSwitcher();
   const navigate = useNavigate();
  const theme = useTheme();


  const handleSwitchTheme = ()=>{
    toggleTheme()
  }


  return (
    <Box className="flex items-center justify-between">
    <AppBar position="static" style={{ height: '56px' }}>
      <Toolbar
       sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 0,
        width: '100%',
      }}
       className="flex items-center justify-between w-[90%] ">
              <IconButton onClick={handleSwitchTheme} color="inherit">
                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>

      <div className="flex items-center justify-between sm:hidden">
               <span>
               <label className="hamburger mr-3" htmlFor="check">
                  <input onClick={() => setHamDrawer((state) => !state)} className={hamDrawer ? 'active' : ''} type="checkbox" id="check" />
                  <span style={{ background: theme.palette.mode === 'dark' ? '#ffffff' : '#191919' }}></span>
                  <span style={{ background: theme.palette.mode === 'dark' ? '#ffffff' : '#191919' }}></span>
                  <span style={{ background: theme.palette.mode === 'dark' ? '#ffffff' : '#191919' }}></span>
                </label>
               </span>
               <Drawer className='sm:hidden' open={hamDrawer} anchor={'right'} 
               style={{zIndex:-1}}
                 PaperProps={{ sx: { marginTop: '35px' } }}
                 ModalProps={{
                  keepMounted: true,
                }}>
                  <Box style={{
                    marginTop:'56px',
                    backgroundColor:'transparent'
                  }}
               sx={{ width: 200 }} role="presentation" onClick={() => setHamDrawer(false)}>
                    <List>
                      <ListItem key={'discover'} disablePadding>
                        <ListItemButton >
                          <ListItemText primary={'Discover'} onClick={() => navigate('/')} />
                        </ListItemButton> 
                      </ListItem>
                      <ListItem key={'Write'} disablePadding>
                        <ListItemButton  onClick={() => navigate('/typograpy')}>
                          <ListItemText primary={'Write'} />
                        </ListItemButton>
                      </ListItem>
                      <ListItem key={'Login'} disablePadding>
                          <ListItemButton >
                            <ListItemText primary={'Login'} />
                          </ListItemButton>
                        </ListItem>
                      </List>
        </Box>
      </Drawer>
        </div>
        <div className="desktop__ver hidden sm:flex sm:items-center">
                <span className="fsr-16 inter  mr-5 cursor-pointer"  onClick={() => navigate('/')}>
                  Discover
                </span>

                <span className="fsr-16 inter mr-5 cursor-pointer"  onClick={() => navigate('/typograpy')}>
                  Write
                </span>
                <span className="fsr-16 inter  mr-5 cursor-pointer" >
                  Login
                </span>
            </div>
          
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Header