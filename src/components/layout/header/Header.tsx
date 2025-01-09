import React, { useEffect, useRef } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import './Header.scss'
import { Avatar, Button, Drawer, List, ListItem, ListItemButton, ListItemText, Menu, MenuItem, useTheme } from '@mui/material';
import { useThemeSwitcher } from '@hooks/useThemeSwitcher';
import { useNavigate } from 'react-router-dom';
import { Login } from '@components/login/Login';
import { useState } from "react"
import { useSelector } from 'react-redux';
import { RootState } from "@store/store";
import { useAuth } from '@hooks/useAuth';
import StorageHandler from "@shared/storageHandeler"
import { MessageBoxActionEnum, MessageBoxCloseTypeEnum, ParsedUserInfo } from '@typings/common';
import { useDialog } from '@hooks/useDialog';

const Header = () => {
  const [hamDrawer, setHamDrawer] = React.useState(false);
   const {toggleTheme} = useThemeSwitcher();
   const {askConfirmation} = useDialog()
   const navigate = useNavigate();
   const {actionType} = useSelector((state:RootState) => state.notification)
    const {userLoggedIn,parsedUserInfo} = useSelector((state: RootState) => state.user);
    const {username} =  parsedUserInfo || {} as ParsedUserInfo
   /**
    * outer state for handeling the login popup
    */
   const [openLogin, setOpenLogin] = useState(false)
   const theme = useTheme();

   const storageHandeler = new StorageHandler()
   const {logout,saveAuthTocken} =   useAuth()
  /**profile menu handeler */
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSwitchTheme = ()=>{
    toggleTheme()
  }

  const handleProfile = () =>{
    navigate('/');
    setAnchorEl(null);
  }


const askUserConfirmation = ()=>{
  askConfirmation("Confirmation","Are you sure to logout?",MessageBoxCloseTypeEnum.SINGLE_ACTION_BTN,MessageBoxActionEnum.LOGIN_CONFIRM)
  setAnchorEl(null);
}

useEffect(()=>{
  
  if(actionType == MessageBoxActionEnum.LOGIN_CONFIRM){
    logout()
  }
},[actionType])

  useEffect(()=>{
    if(storageHandeler.jwtAccesToken){
      saveAuthTocken(storageHandeler.jwtAccesToken)
    }
  },[])
  

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
                      { !userLoggedIn ? (<ListItem key={'Login'} disablePadding>
                          <ListItemButton onClick={()=>setOpenLogin(true)}>
                            <ListItemText primary={'Login'} />
                          </ListItemButton>
                        </ListItem>) : (<>
                          <ListItem key={'Posts'} disablePadding>
                            <ListItemButton >
                              <ListItemText primary={'Posts'} />
                            </ListItemButton>
                          </ListItem>
                          <ListItem key={'Profile'} disablePadding>
                            <ListItemButton >
                              <ListItemText primary={'Profile'} />
                            </ListItemButton>
                          </ListItem>
                          <ListItem key={'Logout'} disablePadding>
                            <ListItemButton onClick={askUserConfirmation}>
                              <ListItemText primary={'Logout'} />
                            </ListItemButton>
                          </ListItem>
                        </>)}
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

                { !userLoggedIn ? <span className="fsr-16 inter  mr-5 cursor-pointer" onClick={()=>setOpenLogin(true)} >
                  Login
                </span>:(
                  <>
      {/* avatar goes here  */}
      <span className="fsr-16 inter mr-5 cursor-pointer">
                      Posts
                    </span>
      <Button onClick={handleClick}>
          <Avatar  >{username[0]}</Avatar>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem  onClick={handleProfile}>Profile</MenuItem>
        <MenuItem  onClick={askUserConfirmation}>Logout</MenuItem>
      </Menu>
                  </>
                )}
              
            </div>
          
      </Toolbar>
    </AppBar>
  </Box>
  { <Login open={openLogin} setOpen={setOpenLogin}/>}
  </>
  )
}

export default Header