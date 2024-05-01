import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Features/authSlice';
import productsReducer from './Features/products/productsSlice';
import  presentationProductsReducer  from './Features/products/presentationsSlice';
import ordersReducer from "./Features/orders/ordersSlice";
import appReducer from "./Features/appSlice"

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    presentationProducts: presentationProductsReducer,
    orders: ordersReducer,
    app: appReducer,
  }
});

export default store;