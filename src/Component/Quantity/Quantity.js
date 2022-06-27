import React,{useState} from 'react';
import classes from '../../Styles/main.module.css';
import {useDispatch} from "react-redux";
import {addItemToCart,removeItemFromCart} from "../../store/slices/cart-slice";

const Quantity = (props) =>{
    const {id , name, img, price} = props.item;
    const [quantity , setQuantity] = useState(1);
    const plusValue = Number(quantity) + 1;
    const minusValue = Number(quantity) - 1;
    const dispatch = useDispatch();
    const addToCartHandler = () =>{
        dispatch(addItemToCart({
            id,
            name,
            img,
            price,

        }));
        setQuantity(plusValue);
    }

    const removeItemFromCartHandler = () =>{
        dispatch(removeItemFromCart(id))
        if(quantity > 0)
            setQuantity(minusValue)
    }
    return(
        <div>
            <div className={classes["quantity-input"]}>
                <button type='button' className={`${classes["quantity-input__modifier"]} ${classes["quantity-input__modifier--right"]}`}
                        onClick={addToCartHandler}>
                    &#xff0b;
                </button>
                <input className={classes["quantity-input__screen"]} type="text" value={quantity} readOnly/>
                <button type='button' className={`${classes["quantity-input__modifier"]} ${classes["quantity-input__modifier--left"]}`}
                        onClick={removeItemFromCartHandler}>
                    &mdash;
                </button>
            </div>
        </div>
    )
}
export default Quantity;