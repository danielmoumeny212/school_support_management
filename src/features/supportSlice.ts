import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import classService from "../services/classService";

interface SupportsState {
  supports: Supports[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null ;
}

const initialState: SupportsState = {
  supports: [],
  status: "idle",
  error: null,
};

export const fetchSupport = createAsyncThunk(
  "supports/fetchSupports",
  async (_, { getState, rejectWithValue }) => {
    const { userType } = (getState() as RootState).auth;
    if (userType === "teacher") {
      const { classes } = (getState() as RootState).teacher;
      try {
        const response = await classService.getManyClassesSupports(classes);
        return response;
      } catch (error: any) {
        return rejectWithValue(error.response.data);
      }
    } else if (userType === "student") {
      const { classId } = (getState() as RootState).studentInfo;
      try {
        const response = await classService.getClassSupports(classId!);
        return response; 
      } catch (error: any) {
        return rejectWithValue(error.response.data);
      }
    }
  }
);

interface SupportInput {
  classId: string;
  support: Support;
}


export const addSupport  = createAsyncThunk(
  "supports/addSupports",
  async({classId , support}:SupportInput, {getState, rejectWithValue}) => {
    try {
      const response = await classService.addClassSupport(classId,support)
       return response ; 
    }catch(error: any){
      return rejectWithValue(error.response.data);
    }
  }
)

const supportSlice = createSlice({
  name: "supports", 
  initialState, 
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(addSupport.pending, (state) => {
       state.status = "loading";
    })
    .addCase(addSupport.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.supports.push(action.payload);
    })
    .addCase(addSupport.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message!;
    })
    .addCase(fetchSupport.pending, (state) => {
      state.status = "loading";
    })
    .addCase(fetchSupport.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.supports = action.payload;
    })
    .addCase(fetchSupport.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message!;
    });
  }
})
export const getStatus = (state:RootState) => state.courses.status;
export const getError = (state:RootState) => state.courses.error;
export const getSupports = (state:RootState) => state.courses.supports;
export default supportSlice.reducer;