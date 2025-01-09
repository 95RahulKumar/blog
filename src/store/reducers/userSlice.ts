import { createSlice } from '@reduxjs/toolkit'
import { IUserInfoAPI, ParsedUserInfo, ThemePrefEnum } from '@typings/common'

export interface IUser {
    userLoggedIn: boolean;
    parsedUserInfo: ParsedUserInfo | undefined;
    isSocketConnected: boolean;
    themePref: ThemePrefEnum|null;
    userInfo?: IUserInfoAPI;
  }
  
const initialState: IUser = {
    userLoggedIn: false,
    parsedUserInfo: undefined,
    isSocketConnected: false,
    themePref: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userActiveAction:(state,action)=>{
    state.userLoggedIn = action?.payload;
    },
    setUserInfo:(state,action)=>{
      state.userLoggedIn = true;
      state.parsedUserInfo = action.payload
    },
    userDetailsAction:(state)=>{
        
    },
    userSocketConnection:(state)=>{
      
    },
    changeTheme: (state,action) => {
      state.themePref = action?.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {changeTheme,setUserInfo,userActiveAction,userDetailsAction,userSocketConnection} = userSlice.actions;

export default userSlice.reducer