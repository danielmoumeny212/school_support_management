
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import classService from "../services/classService";

interface ExamsState {
  exams: Exam[]  ,
  status: 'idle'| 'loading' | 'succeeded' | 'failed', 
  error: string | null 
}

const initialState: ExamsState = {
   exams: [], 
   status: "idle", 
   error: null, 
}

export  const fetchExams = createAsyncThunk(
  "exams/fetchExams",
  async(_, {getState, rejectWithValue}) => {
    const {userType} = (getState() as RootState).auth; 
    if (userType === "teacher"){
      const {classes } =(getState() as RootState).teacher; 
       try {
         const response = await classService.getManyClassesExam(classes);
         return response; 
       }catch(error: any){
         return rejectWithValue(error.response.data);
       }
    }
   else if (userType === "student") {
       const { classId} = (getState() as RootState).studentInfo; 
       try {
          const response  = await classService.getClassExam(classId!);
          return response; 
       }catch(error: any){
        return rejectWithValue(error.response.data);
       }
   }
  }
);

interface examAdded {
  classId: string;
  exam: Exam; 

}

export const addExam = createAsyncThunk("exam/addExam", 
async({classId, exam }:examAdded, {getState, rejectWithValue}) => {
 const {id: userId} = (getState() as RootState).user;
 try {
   const response = await  classService.addClassExam(classId, exam, userId!);
   return response; 
 }catch(err: any){
  return rejectWithValue(err.response.data)
 }
 
})


const examSlice = createSlice({
  name: "exams", 
  initialState,
  reducers: {

  }, 
  extraReducers: (builder) => {
    builder
    .addCase(fetchExams.pending, (state) => {
      state.status = "loading";
    })
    .addCase(fetchExams.fulfilled, (state,  action) => {
      state.status = "succeeded";
      state.exams = action.payload!;
    })
    .addCase(fetchExams.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message!;
    })
    .addCase(addExam.pending, (state) => {
      state.status = "loading";
    })
    .addCase(addExam.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.exams.push(action.payload);
    })
    .addCase(addExam.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message!;
    });
  }
})

export const getStatus = (state: RootState) => state.exams.status; 
export const getError = (state: RootState) => state.exams.error;
export const getExams = (state: RootState) => state.exams.exams; 
export default examSlice.reducer; 