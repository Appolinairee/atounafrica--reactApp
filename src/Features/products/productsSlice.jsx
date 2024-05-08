import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        addProduct: (state, action) => {
            state.products.push(action.payload);
        },
        updateProduct: (state, action) => {
            const updatedProduct = action.payload;
            console.log(updatedProduct);
            const existingProductIndex = state.products?.findIndex(product => product.id === updatedProduct.id);
            if (existingProductIndex !== -1) {
                state.products[existingProductIndex] = updatedProduct;
            } else {
                state.products.push(updatedProduct);
            }
        },
        deleteProduct: (state, action) => {
            const productId = action.payload;
            state.products = state.products.filter(product => product.id !== productId);
        },
        selectProductBySlugName: (state, action) => {
            const slugName = action.payload;
            state.selectedProduct = state.products.find(product => product.slug_name === slugName) || null;
        },
    },
});

export const { setProducts, addProduct, updateProduct, deleteProduct, selectProductBySlugName } = productsSlice.actions;

export const selectProducts = (state) => state.products.products;

export default productsSlice.reducer;
