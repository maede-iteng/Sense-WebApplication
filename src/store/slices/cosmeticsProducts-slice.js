import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {baseURL} from "../../Component/General";

export const cosmeticsProducts = createAsyncThunk(
    "cosmetics/cosmeticsProducts",
    async () =>{
        try{
            const response = await axios.get(baseURL + `categories/4?fields=name&populate[products][populate]=*`);
            return response.data.data.attributes.products.data;
        }catch (error){
            console.log(error);
        }
    }
);
const cosmeticsProductSlice = createSlice({
    name:"cosmetics",
    initialState:{
        cosmeticsItems:[],
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
                // default:
                //     state.filteredItem;
            }
        }
    },
    extraReducers: {
        [cosmeticsProducts.pending]: (state) =>{
            state.status = "pending"
        },
        [cosmeticsProducts.fulfilled]: (state , action) =>{
            state.filteredItem = action.payload;
            state.cosmeticsItems = action.payload;
            state.status = "success"
        },
        [cosmeticsProducts.rejected]: (state) =>{
            state.status = "rejected"
        },
    }

});

export const cosmeticsActions = cosmeticsProductSlice.actions;
export const {filterBySort} = cosmeticsProductSlice.actions;
export default cosmeticsProductSlice;