
import { configureStore } from '@reduxjs/toolkit'
import userReducer from '@store/reducers/userSlice';
import notificationReducer from '@store/reducers/notificationSlice'
import axiosReducer from '@store/reducers/axiosSlice'
import toastReducer from '@store/reducers/toastSlice';
export const store = configureStore({
  reducer: {
    user:userReducer,
    notification:notificationReducer,
    axios:axiosReducer,
    toastMessage:toastReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch