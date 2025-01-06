import { createSlice } from "@reduxjs/toolkit"
import { INotificationReducerState } from "@typings/common"

const initialState:INotificationReducerState = {
    messageDialogDetails:undefined,
    isSubmitted:false
}

export const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        setMessageDialogDetails:(state,action)=>{
            state.messageDialogDetails = action.payload
        },
        SubmitDialog:(state,action)=>{
            state.isSubmitted = action.payload
        }
    },
  })

 export const {setMessageDialogDetails,SubmitDialog} =  notificationSlice.actions;
 
 export default notificationSlice.reducer
