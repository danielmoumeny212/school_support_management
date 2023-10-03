import { configureStore} from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import studentReducer from "../features/studentSlice";
import userReducer from "../features/userSlice";
import teacherReducer from "../features/teacherSlice";
import navReducer from "../features/navSlice";
import supportReducer from "../features/supportSlice";
import examReducer from "../features/examSlice";
import themeReducer from "../features/themeSlice";



const store = configureStore({
  reducer: {
  auth : authReducer,
  studentInfo: studentReducer,
  user: userReducer,
  teacher: teacherReducer, 
  nav: navReducer,
  courses: supportReducer,
  exams: examReducer,
  // theme: themeReducer, 
  },
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 
export default store ; 