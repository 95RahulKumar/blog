import { setMessageDialogDetails } from "@store/reducers/notificationSlice";
import { MessageBoxCloseTypeEnum, MessageBoxProps, MessageBoxTypeEnum } from "@typings/common";
import { useDispatch } from "react-redux";
export const  useDialog = ()=>{
    const dispatch = useDispatch()

    function askConfirmation(title:string,msg:string,type:MessageBoxCloseTypeEnum){
      const msgProp:MessageBoxProps = {
          title: title ?? 'Confirmation',
          content: msg,
          type: MessageBoxTypeEnum.MESSAGE_BOX,
          closeMsg: 'Close',
          confirmMsg: 'Confirm',
          confirmFor: type,
      }
      dispatch(setMessageDialogDetails(msgProp))
    }


    return {
        askConfirmation 
    }

}
