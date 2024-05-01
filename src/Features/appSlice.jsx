import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  toasterContent: '',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setToasterContent: (state, action) => {
      state.toasterContent = action.payload;
    },
  },
});

export const { setToasterContent } = appSlice.actions;

export default appSlice.reducer;