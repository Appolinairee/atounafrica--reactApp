// authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   authToken: localStorage.getItem("token"),
   user: null,
   userLoading: true,
   userError: false,
};

const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
      login(state, action) {
         state.user = action.payload.user;
         state.authToken = action.payload.token;
         state.userLoading = false;
         state.userError = false;

         localStorage.setItem("token", action.payload.token);
      },
      logout(state) {
         state.user = null;
         state.authToken = null;
         state.userLoading = false;
         state.userError = false;
         localStorage.removeItem("token");
      },
      setLoading(state) {
         state.userLoading = true;
         state.userError = false;
      },
      setError(state) {
         state.userLoading = false;
         state.userError = true;
      },
   },
});

export const { login, logout, setLoading, setError } = authSlice.actions;

export default authSlice.reducer;
