import { createSlice } from "@reduxjs/toolkit";

interface NavState {
  selectedIndex: number; 
  navText: string ; 
}
const initialState: NavState = {
  selectedIndex: 0,
  navText: "Accueil", 

}

const navSlice = createSlice({
   name: "nav",
   initialState, 
   reducers: {
     selectedItem: (state, action) => {
       state.selectedIndex = action.payload
     },
     setNavText: (state, action) => {
      state.navText = action.payload;
    },
    reset: (state) => {
      state.selectedIndex = 0 ;
      state.navText = 'Accueil'
   }
   }

})
export const { selectedItem,reset , setNavText } = navSlice.actions;
export default navSlice.reducer;