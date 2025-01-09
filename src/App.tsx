import './App.scss'
import { useDialog } from '@hooks/useDialog';
import { useThemeSwitcher } from '@hooks/useThemeSwitcher'
import { Button } from '@mui/material';
import { RootState } from '@store/store';

import { useDispatch, useSelector } from 'react-redux';
import { postService } from './services/postService';
import { useEffect } from 'react';
import Home from '@pages/Home';
import { PushToastMessage } from '@store/reducers/toastSlice';
import Header from '@components/layout/header/Header';
import Loader from '@components/loader/Loader';
import MessageDialog from '@components/message-dialog/MessageDialog';
import HandleRoute from '@router/HandleRoute';
import { StatusMessage } from '@components/status-message/StatusMessage';

function App() {
 
  const {askConfirmation} = useDialog();
  const {getPost} = postService()
  const dispatch = useDispatch()
  const handlePushMessage = ()=>{
    dispatch(PushToastMessage({message:'hello',type:"SUCCESS"}))
  }

  useEffect(()=>{
    // if(storageHandeler.jwtAccesToken){
    //   saveAuthTocken(storageHandeler.jwtAccesToken)
    // }
  },[])
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
