import React, {useEffect} from 'react';
import classes from '../../Styles/main.module.css';
import {useDispatch, useSelector} from "react-redux";
import cartSlice, {removeItemFromCart} from '../../store/slices/cart-slice';

const ShoppingCartItems = (props) =>{
    const {name ,img, price,quantity,total,id} = props.item;
    const dispatch = useDispatch();
    const removeItemFromCartHandler = () => {
        dispatch(removeItemFromCart(id))
    }

    return(
        <>
            <li className={classes.container}>
                <div className={classes['shopping__item']}>
                    <div className={classes['shopping__product']}>
                        <div className={classes.thumbnail}>
                            <img src={img} alt={name}/>
                        </div>
                        <div className={classes['shopping__info']} >
                            <h2>{name}</h2>
                            <h3><span>قیمت:</span> {price}</h3>
                            <p>تعداد محصول: {quantity}</p>
                            <p> قیمت کل: {total}</p>
                        </div>
                    </div>
                    <button type='button' onClick={removeItemFromCartHandler}>
                        <ion-icon name='trash'></ion-icon>
                    </button>
                </div>
            </li>
        </>
    )
}
export default ShoppingCartItems;