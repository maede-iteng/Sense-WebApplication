import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {baseURL} from "../../Component/General";

export const productsCategoryFetch = createAsyncThunk(
    "productsCategory/productsCategoryFetch",
    async () =>{
        try{
            const response = await axios.get(baseURL + `categories?fields=*&populate=image`);
            return response.data.data;
        }catch (error){
            console.log(error);
        }
    }
);
const productsCategorySlice = createSlice({
    name:"productsCategory",
    initialState:{
        items:[],
        status:null
    },
    extraReducers: {
        [productsCategoryFetch.pending]: (state) =>{
            state.status = "pending"
        },
        [productsCategoryFetch.fulfilled]: (state , action) =>{
            state.items = action.payload;
            state.status = "success"
        },
        [productsCategoryFetch.rejected]: (state) =>{
            state.status = "rejected"
        },
    }
});
export const productsActions = productsCategorySlice.actions;
export default productsCategorySlice;