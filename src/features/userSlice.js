import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice(
    {
        name: 'user',
        initialState :{
            user: 'null'
        },

//reducers
     reducers:{
         login: (state,action) => {
             state.user = action.payload
         },

         logout:(state,action) =>{
             state.user = 'null'
         }
     }

    }
)
export const{login,logout} = userSlice.actions;
export const selectState =userSlice.user.user;
export default userSlice.reducer