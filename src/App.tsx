import './App.scss'
import { useDialog } from '@hooks/useDialog';
import { useThemeSwitcher } from '@hooks/useThemeSwitcher'
import { Button } from '@mui/material';


import { useDispatch, useSelector } from 'react-redux';
import { postService } from './services/postService';
import { useEffect } from 'react';
import { PushToastMessage } from '@store/reducers/toastSlice';
import Header from '@components/layout/header/Header';
import Loader from '@components/loader/Loader';
import MessageDialog from '@components/message-dialog/MessageDialog';
import HandleRoute from '@router/HandleRoute';
import { StatusMessage } from '@components/status-message/StatusMessage';

import StorageHandler from '@shared/storageHandeler';
import { useSocket } from '@hooks/useSocket';
import { useAuth } from '@hooks/useAuth';
import { RootState } from '@store/store';
function App() {
  const storageHandeler = new StorageHandler()
  const {logout,saveAuthTocken} =   useAuth()
  const {userLoggedIn,parsedUserInfo} = useSelector((state: RootState) => state.user);
  const {askConfirmation} = useDialog();
  const {getPost} = postService()
  const dispatch = useDispatch()
  const {connectWBSocket} = useSocket()
  const handlePushMessage = ()=>{
    dispatch(PushToastMessage({message:'hello',type:"SUCCESS"}))
  }
  
  useEffect(()=>{
    
    setTimeout(()=>{
      if(userLoggedIn){
        /**
         * commented temporarily
         */
        // connectWBSocket()
      }
    },200)
  
  },[userLoggedIn])
  return (
    <>
      <Header/>
      <HandleRoute/>
       <Loader/>
       <StatusMessage/>
      <MessageDialog/>
    </>
  )
}

export default App
