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
      },
      deleteOrder: (state, action) => {
         const orderIdToDelete = action.payload;
         state.orders = state.orders.filter(
            (order) => order.id !== orderIdToDelete
         );
      },

      makeOrderRefund: (state, action) => {
         const orderIdToRefund = action.payload;
         const orderIndex = state.orders.findIndex(
            (order) => order.id === orderIdToRefund
         );
         if (orderIndex !== -1) {
            state.orders[orderIndex].refund = 1;
         }
      },
   },
});

export const selectOrderById = (orderId) =>
   createSelector(
      (state) => state.orders.orders,
      (orders) => orders.find((order) => order.id === orderId)
   );

export const {
   setOrders,
   setLoading,
   setError,
   updateOrders,
   updateOrderItems,
   deleteOrder,
   makeOrderRefund,
} = ordersSlice.actions;
export const selectOrders = (state) => state.orders.orders;

export default ordersSlice.reducer;
