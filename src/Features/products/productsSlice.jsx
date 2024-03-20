import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        }
    },
});

export const { setProducts } = productsSlice.actions;
export const selectProducts = (state) => state.products.products;

export default productsSlice.reducer;