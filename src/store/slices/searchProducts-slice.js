import {createSlice} from "@reduxjs/toolkit";
import {productsFetch} from "./product-slice";

export const searchProductsSlice = createSlice({
    name: 'searchProducts',
    initialState: {
        items: [],
        searchedItems: [],
        status: null
    },
    reducers: {
        handleSearchProducts: (state, action) => {
            state.searchedJobs = [];
            state.searchedJobs.push(action.payload)
        },
    },
    extraReducers: {
       [productsFetch.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.searchedItems = action.payload;
            state.status = false;
        },
        [productsFetch.pending]: (state, action) => {
            state.status = true;
        }
    },
});

export const {handleSearchProducts} = searchProductsSlice.actions;
export default searchProductsSlice;