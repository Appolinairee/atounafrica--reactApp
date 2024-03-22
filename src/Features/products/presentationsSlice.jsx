import { createSlice } from "@reduxjs/toolkit";

export const presentationProductsSlice = createSlice({
    name: "presentationProducts",
    initialState: {
        presentations: [],
    },
    reducers: {
        setPresentations: (state, action) => {
            state.presentations = action.payload;
        }
    },
});

export const { setPresentations } = presentationProductsSlice.actions;
export const selectPresentations = (state) => state.presentationProducts.presentations;

export default presentationProductsSlice.reducer;