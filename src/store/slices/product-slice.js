import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {baseURL} from "../../Component/General";

export const productsFetch = createAsyncThunk(
    "products/productsFetch",
    async () =>{
        try{
            const response = await axios.get(baseURL + `products?fields=*&populate=image`);
            return response.data.data;
        }catch (error){
            console.log(error);
        }
    }
);
const productsSlice = createSlice({
    name:"products",
    initialState:{
        items:[],
        status:null
    },
    extraReducers: {
        [productsFetch.pending]: (state) =>{
            state.status = "pending"
        },
        [productsFetch.fulfilled]: (state , action) =>{
            state.items = action.payload;
            state.status = "success"
        },
        [productsFetch.rejected]: (state) =>{
            state.status = "rejected"
        },
    }
});
export const productsActions = productsSlice.actions;
export default productsSlice;