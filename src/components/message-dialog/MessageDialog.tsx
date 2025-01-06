import { MessageBox } from "@components/message-box/MessageBox"
import { isPropEmpty } from "@shared/utilFunction";
import { setMessageDialogDetails, SubmitDialog } from "@store/reducers/notificationSlice";
import { RootState } from "@store/store";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";

function MessageDialog() {
    const [dialogVisibility, setdialogVisibility] = useState(false);
    const {isSubmitted,messageDialogDetails} = useSelector((state:RootState) => state.notification);
    const dispatch = useDispatch()

    const onConfirmClick=(isSubmitted:boolean) =>{
      setdialogVisibility(false)
      dispatch(SubmitDialog(isSubmitted));
    }

    const onCloseClick=() =>{
      setdialogVisibility(false)
      dispatch(setMessageDialogDetails(null))
    }
    
    useEffect(()=>{
      if(!isPropEmpty(messageDialogDetails)){
        setdialogVisibility(true)
      }
    },[messageDialogDetails])
  return (
   <>
   {dialogVisibility && <MessageBox dialogDetails={messageDialogDetails} confirmBtnEmitter={onConfirmClick}
   closeBtnEmitter={onCloseClick}/>}
   </>
  )
}

export default MessageDialog