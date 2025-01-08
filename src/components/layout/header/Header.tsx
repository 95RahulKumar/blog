import React, { useRef } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import './Header.scss'
import { Drawer, List, ListItem, ListItemButton, ListItemText, useTheme } from '@mui/material';
import { useThemeSwitcher } from '@hooks/useThemeSwitcher';
import { useNavigate } from 'react-router-dom';
import { Login } from '@components/login/Login';
import { useState } from "react"

const Header = () => {
  const [hamDrawer, setHamDrawer] = React.useState(false);
   const {toggleTheme} = useThemeSwitcher();
   const navigate = useNavigate();
   /**
    * outer state for handeling the login popup
    */
   const [openLogin, setOpenLogin] = useState(false)
   const theme = useTheme();

  const handleSwitchTheme = ()=>{
    toggleTheme()
  }


  return (
    <>
    <Box className="flex items-center justify-between">
    <AppBar position="static" color="primary" style={{ height: '56px' }}>
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
                 onClick={() => setHamDrawer(false)}
                 ModalProps={{
                  keepMounted: true,
                }}>
                  <Box style={{
                    marginTop:'56px',
                   
                  }}
               sx={{ width: 200 }} role="presentation">
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
                          <ListItemButton onClick={()=>setOpenLogin(true)}>
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
                <span className="fsr-16 inter  mr-5 cursor-pointer" onClick={()=>setOpenLogin(true)} >
                  Login
                </span>
            </div>
          
      </Toolbar>
    </AppBar>
  </Box>
  { <Login open={openLogin} setOpen={setOpenLogin}/>}
  </>
  )
}

export default Header