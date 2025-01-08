import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ToastMessage } from "@typings/common"

type initialTostMessageType = {
  message:ToastMessage|null
}
const initialState:initialTostMessageType = {
    message:null
}

export const toastSlice = createSlice({
    name: 'toastmessage',
    initialState,
    reducers: {
        PushToastMessage:(state,action:PayloadAction<ToastMessage | null>)=>{
            state.message = action.payload;
        }
    },
  })

 export const {PushToastMessage} =  toastSlice.actions;
 
 export default toastSlice.reducer