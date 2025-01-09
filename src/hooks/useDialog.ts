import { setMessageDialogDetails } from "@store/reducers/notificationSlice";
import { MessageBoxActionEnum, MessageBoxCloseTypeEnum, MessageBoxProps } from "@typings/common";
import { useDispatch } from "react-redux";
export const  useDialog = ()=>{
    const dispatch = useDispatch()

    function askConfirmation(title:string,msg:string,type:MessageBoxCloseTypeEnum,actionType:MessageBoxActionEnum){
      const msgProp:MessageBoxProps = {
          title: title ?? 'Confirmation',
          content: msg,
          type,
          closeMsg: 'Close',
          confirmMsg: 'Confirm',
          actionType
      }
      dispatch(setMessageDialogDetails(msgProp))
    }


    return {
        askConfirmation 
    }

}
