import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Features/authSlice';
import productsReducer from './Features/products/productsSlice';
import  presentationProductsReducer  from './Features/products/presentationsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    presentationProducts: presentationProductsReducer
  }
});

export default store;