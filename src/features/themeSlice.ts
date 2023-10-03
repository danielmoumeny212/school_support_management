import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createTheme } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';

interface ThemeState {
  mode: PaletteMode;
  theme: any; // type de thème MUI
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
   
  },

});

const lightTheme = createTheme({
  palette: {
    mode: 'light',

  },
});

const initialState: ThemeState = {
  mode: 'light',
  theme: lightTheme,
};


const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
      state.theme = state.theme === lightTheme ? darkTheme: lightTheme;
    },
    setMode: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.mode = action.payload;
    },
  },
});

export const { toggleMode, setMode } = themeSlice.actions;
export default themeSlice.reducer;
