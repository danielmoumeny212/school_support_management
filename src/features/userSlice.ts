import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"; 
import userService from "../services/userService";

interface UserState {
  id: string| null; 
  username: string| null;
  email: string| null;
  name: string| null;
  firstName: string| null;
  status: string 
  error? : string ;
}

const initialState: UserState = {
    id: null , 
    username: null, 
    email: null, 
    name:  null,
    firstName: null,
    status: "idle",
}


export const getCurrentUser = createAsyncThunk(
"user/getCurrentUser", async() => {
  try {
    const response = await userService.getUser(); 
    return response; 

  }catch(error){
    throw new Error("Error getting current user")
  }
}
)
const userSlice = createSlice({
  name: "user", 
  initialState, 
  reducers: {
    removeUser: (state) => {
       state.id = null;
       state.username = null; 
       state.email = null;
       state.firstName = null; 
    }
  }, 
  extraReducers: (builder) => {
   builder 
   .addCase(getCurrentUser.pending, (state) => {
     state.status = "loading";

   })
   .addCase(getCurrentUser.fulfilled, (state, action: PayloadAction<User>) => {
      state.username = action.payload.username; 
      state.firstName = action.payload.first_name;
      state.email = action.payload.email;
      state.id = action.payload._id;
      state.name = action.payload.name; 
     state.status = "succeeded";

   })

   .addCase(getCurrentUser.rejected, (state, action) => {
     state.status  = 'failed';
     state.error = action.error.message; 
   })
  }
})

export const {removeUser } = userSlice.actions; 
export default  userSlice.reducer; 