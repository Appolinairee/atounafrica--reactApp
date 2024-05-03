import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
   orders: [],
   loading: false,
   error: null,
};

const ordersSlice = createSlice({
   name: "orders",
   initialState,
   reducers: {
      setOrders: (state, action) => {
         state.orders = action.payload;
         state.loading = false;
         state.error = null;
      },
      setLoading: (state) => {
         state.loading = true;
         state.error = null;
      },
      setError: (state, action) => {
         state.loading = false;
         state.error = action.payload;
      },
      updateOrders: (state, action) => {
         const { id, ...updatedOrder } = action.payload;
         const existingOrderIndex = state.orders.findIndex(
            (order) => order.id === id
         );

         if (existingOrderIndex !== -1) {
            state.orders[existingOrderIndex] = { id, ...updatedOrder };
         } else {
            state.orders.push({ id, ...updatedOrder });
         }
      }
   },
});

export const selectOrderById = (orderId) =>
   createSelector(
      (state) => state.orders.orders,
      (orders) => orders.find((order) => order.id === orderId)
   );

export const { setOrders, setLoading, setError, updateOrders, updateOrderItems } =
   ordersSlice.actions;
export const selectOrders = (state) => state.orders.orders;

export default ordersSlice.reducer;