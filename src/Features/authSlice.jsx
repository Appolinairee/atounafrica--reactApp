// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  authToken: localStorage.getItem('token'),
  user: true,
  userLoading: true,
  userError: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload.user;
      state.userLoading = false;
      state.userError = false;
    },
    logout(state) {
      state.user = null;
      state.userLoading = false;
      state.userError = false;
    },
    setLoading(state) {
      state.userLoading = true;
      state.userError = false;
    },
    setError(state) {
      state.userLoading = false;
      state.userError = true;
    }
  }
});

export const { login, logout, setLoading, setError } = authSlice.actions;

export default authSlice.reducer;