import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Features/authSlice';
import productsReducer from './Features/products/productsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
  }
});

export default store;