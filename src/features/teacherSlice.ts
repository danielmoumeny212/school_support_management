import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"; 
import teacherService from "../services/teacherService";

interface TeacherState {
   userId: string | null;
   subjects: string [], 
   experience: number | null; 
   classes: string[]; 
}
const initialState: TeacherState = {
   userId: null,
   subjects: [], 
   experience: null, 
   classes: []
};

export const getCurrentTeacher = createAsyncThunk(
  "teacher/getCurrentTeacher", async() => {
    try {
      const response = await teacherService.getTeacherInfo(); 
      return response; 
    }catch(error){
       throw new Error("Cannot get current teacher");
    }

  }
)

const teacherSlice = createSlice({
   name: "teacher",
   initialState, 
   reducers: {
    teacherRemoved: (state) => {
      state.subjects = [];
      state.experience = null; 
      state.classes = [];
      state.experience = null; 
    }

   }, 
   extraReducers: (builder) => {
     builder
     .addCase(getCurrentTeacher.pending, (state) => {

     })
     .addCase(getCurrentTeacher.fulfilled, (state, {payload}: PayloadAction<Teacher>) => {
      state.userId =  payload.userId; 
      state.subjects  = [...payload.subjects];
       state.experience = payload.experience;
      state.classes = [...payload.classes]
     })
     .addCase(getCurrentTeacher.rejected, (state) => {

     })
   }
})


export const { teacherRemoved } = teacherSlice.actions;
export default teacherSlice.reducer; 