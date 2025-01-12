import { PushToastMessage } from "@store/reducers/toastSlice"
import { ToastMessage } from "@typings/common"
import { useDispatch } from "react-redux"

export const useToaster =()=>{
    const dispatch = useDispatch()
    const createToast = (message:string,type:'ERROR' | 'INFO' | 'WARNING' | 'SUCCESS' | 'FAILURE') =>{
        const msgObj:ToastMessage= {
            message,
            type
        }
        if(msgObj){
            dispatch(PushToastMessage(msgObj))
        }
    }
    return {createToast}
}