import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {baseURL} from "../../Component/General";

export const hairCareProducts = createAsyncThunk(
    "hairCare/hairCareProducts",
    async () =>{
        try{
            const response = await axios.get(baseURL + `categories/2?fields=name&populate[products][populate]=*`);
            return response.data.data.attributes.products.data;
        }catch (error){
            console.log(error);
        }
    }
);

const hairCareProductSlice = createSlice({
    name:"hairCare",
    initialState:{
        hairCareItems:[],
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
        [hairCareProducts.pending]: (state) =>{
            state.status = "pending"
        },
        [hairCareProducts.fulfilled]: (state , action) =>{
            state.filteredItem = action.payload;
            state.hairCareItems = action.payload;
            state.status = "success"
        },
        [hairCareProducts.rejected]: (state) =>{
            state.status = "rejected"
        },
    }

});

export const hairCareActions = hairCareProductSlice.actions;
export const {filterBySort} = hairCareProductSlice.actions;
export default hairCareProductSlice;