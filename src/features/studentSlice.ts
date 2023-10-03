import { createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import studentService from "../services/studentService";


interface StudentState {
  userId: string | null; 
  id: string | null;
  picture: string | null;
  classId: string | null;
  teachers: string [] | null; 
  status: string 
  error? : string ;
}

const initialState: StudentState = {
  userId: null, 
  id: null,
  picture: null,
  classId: null ,
  status: "idle",
  teachers: null,
};

export const getCurrentStudent = createAsyncThunk("student/getCurrentStudent", 
    async (_, {rejectWithValue}) => {
      try{
        const response = await studentService.getStudentInfo();
        return response; 
      }catch(error: any ){
         return rejectWithValue(error.response.data)
      }
    })
const studentSlice = createSlice({
  name: "student", 
  initialState, 
  reducers: {
    studentCleared: (state) => {
      state.id = null; 
      state.userId = null;
      state.picture = null;
      state.teachers = [];
      state.classId = null;
    }
   
  }, 

  extraReducers:(builder) => {
    builder
    .addCase(getCurrentStudent.pending, (state) => {
      state.status = "loading"; 
    })
    .addCase(getCurrentStudent.fulfilled, (state, action: PayloadAction<Student>) => {
       state.status = "succeeded";
       state.userId = action.payload.userId; 
       state.id = action.payload._id; 
       state.classId = action.payload.classId;
       state.picture = action.payload.picture
    })
    .addCase(getCurrentStudent.rejected, (state, action) => {
      state.status = "failed";
       state.error = action.error.message ;
    })
  }
  
}); 



export const { studentCleared} = studentSlice.actions; 
export default studentSlice.reducer; 