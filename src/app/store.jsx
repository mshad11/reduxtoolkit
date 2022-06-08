import { configureStore } from "@reduxjs/toolkit";
import { useReducer } from '../features/userSlice';


export const store  = configureStore({
    reducers:{
        user:userReducer
    }
})