import {configureStore} from "@reduxjs/toolkit";
import productsSlice from "./slices/product-slice";
import skinCareProductSlice from "./slices/skinCareProducts-slice";
import hairCareProductSlice from "./slices/hairCareProducts-slice";
import bodyCareProductSlice from "./slices/bodyCareProducts-slice";
import cosmeticsProductSlice from "./slices/cosmeticsProducts-slice";
import cartSlice from "./slices/cart-slice";
import productsCategory from './slices/productCategory-slice';

const store = configureStore({
    reducer:{
        products: productsSlice.reducer,
        skinCare: skinCareProductSlice.reducer,
        hairCare: hairCareProductSlice.reducer,
        bodyCare: bodyCareProductSlice.reducer,
        cosmetics: cosmeticsProductSlice.reducer,
        productsCategory:productsCategory.reducer,
        cart: cartSlice.reducer,
    }
})
export default store;