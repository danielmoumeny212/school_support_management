import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";

interface AuthState {
  isAuthenticated: boolean;
  userType : string | null ; 
  accessToken: string | null; 
}

const initialState: AuthState = {
  isAuthenticated: false,
  userType: null , 
  accessToken: null, 
 }; 

const  authSlice = createSlice({
   name: "auth",
   initialState, 
   reducers: {
     login: (state, action) => {
         state.isAuthenticated = true,
         state.accessToken = action.payload.accessToken; 
         state.userType = action.payload.userType;
     },
     logout: (state) => {
      state.isAuthenticated = false;
      state.accessToken = null;
      state.userType = null; 
     }
    
   }

}
);
export const { login, logout} = authSlice.actions; 
export const getToken = (state: RootState ) => state.auth.accessToken; 
export const isAuthenticated = (state: RootState ) => state.auth.isAuthenticated;
export const getUserType = (state: RootState) => state.auth.userType; 
export default authSlice.reducer; 