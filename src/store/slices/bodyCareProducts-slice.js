import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {baseURL} from "../../Component/General";

export const bodyCareProducts = createAsyncThunk(
    "bodyCare/bodyCareProducts",
    async () =>{
        try{
            const response = await axios.get(baseURL + `categories/3?fields=name&populate[products][populate]=*`);
            return response.data.data.attributes.products.data;
        }catch (error){
            console.log(error);
        }
    }
);
const bodyCareProductSlice = createSlice({
    name:"bodyCare",
    initialState:{
        bodyCareItems:[],
        filteredItem:[],
        status:null
    },
    reducers:{
        filterBySort(state,action){
            switch (action.payload){
                case 'asc':state.filteredItem = state.filteredItem?.sort((a,b) => (a.attributes.price > b.attributes.price ? 1 : -1));
                    break;
                case 'desc':state.filteredItem = state.filteredItem?.sort((a,b) => (a.attributes.price > b.attributes.price ? -1 : 1));
                    break;
            }
        }
    },
    extraReducers: {
        [bodyCareProducts.pending]: (state) =>{
            state.status = "pending"
        },
        [bodyCareProducts.fulfilled]: (state , action) =>{
            state.filteredItem = action.payload;
            state.bodyCareItems = action.payload;
            state.status = "success"
        },
        [bodyCareProducts.rejected]: (state) =>{
            state.status = "rejected"
        },
    }

});
export const bodyCareActions = bodyCareProductSlice.actions;
export const {filterBySort} = bodyCareProductSlice.actions;
export default bodyCareProductSlice;