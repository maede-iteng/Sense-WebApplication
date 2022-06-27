import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {baseURL} from "../../Component/General";

export const skinCareProducts = createAsyncThunk(
    "skinCare/skinCareProducts",
    async () =>{
        try{
            const response = await axios.get(baseURL + `categories/1?fields=name&populate[products][populate]=*`);
            return response.data.data.attributes.products.data;
        }catch (error){
            console.log(error);
        }
    }
);

const skinCareProductSlice = createSlice({
    name:"skinCare",
    initialState:{
        filteredItem:[],
        skinCareItems:[],
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
        [skinCareProducts.pending]: (state) =>{
            state.status = "pending"
        },
        [skinCareProducts.fulfilled]: (state , action) =>{
            state.filteredItem = action.payload;
            state.skinCareItems = action.payload;
            state.status = "success"
        },
        [skinCareProducts.rejected]: (state) =>{
            state.status = "rejected"
        },
    }

});

export const skinCareActions = skinCareProductSlice.actions;
export const {filterBySort} = skinCareProductSlice.actions;
export default skinCareProductSlice;