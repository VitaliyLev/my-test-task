import { createSlice } from '@reduxjs/toolkit';

//theme slice
const themeToggleSlice = createSlice({
  name: 'themeToggle',
  initialState: {
    isDarkMode: false,
  },
  reducers: {
    toggleTheme: state => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { toggleTheme } = themeToggleSlice.actions;
export const themeReducer = themeToggleSlice.reducer;

