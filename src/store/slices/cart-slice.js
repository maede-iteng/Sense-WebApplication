import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
        totalQuantity:localStorage.getItem("totalQuantity") ? JSON.parse(localStorage.getItem("totalQuantity")) : 0,
        totalAmount:0,
    },
    reducers: {
        addItemToCart(state , action){
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;
            if(!existingItem){
                state.items.push({
                    name:newItem.name,
                    id:newItem.id,
                    img:newItem.img,
                    price:newItem.price,
                    totalPrice:newItem.price,
                    quantity:1
                });
            }else {
                existingItem.quantity++;
                existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price);
            }
            localStorage.setItem("cartItems", JSON.stringify(state.items));
            localStorage.setItem("totalQuantity", JSON.stringify(state.totalQuantity));
        },
        removeItemFromCart(state , action){
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.totalQuantity--;
            if(existingItem.quantity === 1){
                state.items = state.items.filter(item => item.id !== id)

            }else{
                existingItem.quantity--;
                existingItem.totalPrice = Number(existingItem.totalPrice) - Number(existingItem.price);
            }
            localStorage.setItem("cartItems", JSON.stringify(state.items));
            localStorage.setItem("totalQuantity", JSON.stringify(state.totalQuantity));
        },
    },
});
export const {addItemToCart,removeItemFromCart} = cartSlice.actions;
export default cartSlice;