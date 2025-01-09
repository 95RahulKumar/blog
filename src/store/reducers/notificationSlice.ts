import { createSlice } from "@reduxjs/toolkit"
import { INotificationReducerState } from "@typings/common"

const initialState:INotificationReducerState = {
    messageDialogDetails:undefined,
    actionType:null
}

export const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        setMessageDialogDetails:(state,action)=>{
            state.messageDialogDetails = action.payload;
        },
        SubmitDialog:(state,action)=>{
            state.actionType = action.payload
        }
    },
  })

 export const {setMessageDialogDetails,SubmitDialog} =  notificationSlice.actions;
 
 export default notificationSlice.reducer
