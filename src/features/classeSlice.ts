import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import classService from "../services/classService";
import { RootState } from "../app/store";

interface ClassState {
  _id: string | null;
  name: string | null;
  courses: string[];
  students: string[];
  supports: string[];
  teachers: string[];
}

const initialState: ClassState = {
  _id: null,
  name: null,
  courses: [],
  students: [],
  supports: [],
  teachers: [],
};

export const fetchClass = createAsyncThunk(
  "class/fetchClasse",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { classId } = (getState() as RootState).studentInfo;
      const response = await classService.getClass(classId!);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

const classSlice = createSlice({
  name: "class",
  initialState,
  reducers: {
    updateClass(state, action: PayloadAction<ClassState>) {
      state._id = action.payload._id;
      state.name = action.payload.name;
      state.courses = action.payload.courses;
      state.students = action.payload.students;
      state.supports = action.payload.supports;
      state.teachers = action.payload.teachers;
    },
  },
  extraReducers(builder) {
    builder.addCase(
      fetchClass.fulfilled,
      (state, action: PayloadAction<ClassState>) => {
        state._id = action.payload._id;
        state.name = action.payload.name;
        state.courses = action.payload.courses;
        state.students = action.payload.students;
        state.supports = action.payload.supports;
        state.teachers = action.payload.teachers;
      }
    );
  },
});

export const { updateClass } = classSlice.actions; 
export default classSlice.reducer; 
