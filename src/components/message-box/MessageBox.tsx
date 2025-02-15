import React, { forwardRef, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { MessageBoxCloseTypeEnum, MessageBoxProps, MessageIconTypeEnum } from '@typings/common';

export const MessageBox = ({dialogDetails,confirmBtnEmitter,closeBtnEmitter}:{
  dialogDetails:MessageBoxProps | undefined,
  confirmBtnEmitter:(arg:boolean)=> void,
  closeBtnEmitter:()=>void
}) => {
    const [open, setOpen] = useState(true);
    const handleClose = ()=>{
      closeBtnEmitter()
      setOpen(false)
    }
    
    const handleSubmit = ()=>{
      confirmBtnEmitter(true);
      setOpen(true)
    }
  
  return (
    <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">
  {dialogDetails?.title}
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
       {dialogDetails?.content}
      </DialogContentText>
    </DialogContent>
    <DialogActions>

      {(dialogDetails && dialogDetails.type == MessageBoxCloseTypeEnum.SINGLE_ACTION_BTN) && <Button variant="outlined" onClick={handleSubmit} autoFocus>
      {dialogDetails?.confirmMsg ?? 'Ok'}
      </Button>}

      {(dialogDetails && dialogDetails.type == MessageBoxCloseTypeEnum.DOUBLE_ACTION_BTN) &&
      
      <>
        <Button variant="outlined" onClick={handleClose}>{dialogDetails?.closeMsg??'close'}</Button>
      
        <Button variant="outlined" onClick={handleSubmit} autoFocus>
        {dialogDetails?.confirmMsg ?? 'Ok'}
        </Button>

      </>}

    </DialogActions>
  </Dialog>
  )
}
