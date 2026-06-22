import { createSlice } from "@reduxjs/toolkit";


// define initialState 
const initialState = {
    user : null,
    token : localStorage.getItem(import.meta.env.USER_TOKEN) || null,
    isAuthenticated : !!localStorage.getItem(import.meta.env.USER_TOKEN)
}

const authSlice = createSlice({
    name : "auth",
    initialState,

    reducers : {
        login : (state,action)=>{
            state.user = action.payload.user ;
            state.token = action.payload.token ;
            state.isAuthenticated = true ;
        },

        logout : (state,action)=>{
            state.user = null;
            state.token = null;
            state.isAuthenticated = false ;
        }
    }
})

export const {login , logout} = authSlice.actions ;
export default authSlice.reducers ;