import './App.scss'
import Home from '@components/Home'
import { useDialog } from '@hooks/useDialog';
import { useThemeSwitcher } from '@hooks/useThemeSwitcher'
import { Button } from '@mui/material';
import { RootState } from '@store/store';
import { Provider, useSelector } from 'react-redux';
import { postService } from './services/postService';
import { useEffect } from 'react';
import CustomThemeProvider from '@theming/themeProvider';
import Header from '@components/layout/header/Header';
import Loader from '@components/loader/Loader';
import MessageDialog from '@components/message-dialog/MessageDialog';
import HandleRoute from '@router/HandleRoute';
function App() {
 
  const {askConfirmation} = useDialog();
  const {getPost} = postService()
  const {messageDialogDetails,isSubmitted} = useSelector((state:RootState) => state.notification);
 

  const handleDialogOpen = ()=>{
    askConfirmation("confirmation",1);
  }

  useEffect(()=>{
    getPost()
  },[])
  return (
    <>
      <Header/>
      <HandleRoute/>
       <Loader/>
      <MessageDialog/>
    </>
  )
}

export default App
