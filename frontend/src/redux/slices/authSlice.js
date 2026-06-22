import { createSlice } from "@reduxjs/toolkit";


// define initialState 
const initialState = {
    user : null,
    token : localStorage.getItem("youtube-user-token") || null,
    isAuthenticated : !!localStorage.getItem("youtube-user-token")
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
export default authSlice.reducer ;