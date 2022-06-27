import React,{useEffect} from 'react';
import TrustedProductsCard from "../Component/Content/TrustedProductsCard";
import Footer from "../Component/Footer/Footer";
import classes from '../Styles/main.module.css';
import ShoppingCartItems from "../Component/ShoppingCartItems/ShoppinCartItems";
import {productsFetch} from "../store/slices/product-slice";
import {useDispatch, useSelector} from "react-redux";
const ShoppingCart = () =>{
    const cartItems = useSelector(state => state.cart.items);
    const {items , status} = useSelector(state => state.products);
    const dispatch = useDispatch();

    useEffect( () =>{
        dispatch(productsFetch());
    },[]);

    return(
        <>
            <ul className={classes.cartItems}>
                {cartItems &&
                    cartItems.length === 0 ? (
                    <h1>سبد خرید شما خالی است</h1>
                ): (
                    cartItems.map(item => (
                       <ShoppingCartItems key={item.id} item ={{
                           id:item.id,
                           name:item.name,
                           img:item.img,
                           price:item.price,
                           quantity:item.quantity,
                           total:item.totalPrice
                       }}/>
                    ))
                )
                }
            </ul>
            <TrustedProductsCard title='محصولات دیگر ما'
                                 items={items}
                                 status={status}
            />
            <Footer/>
        </>
    )
}
export default ShoppingCart;