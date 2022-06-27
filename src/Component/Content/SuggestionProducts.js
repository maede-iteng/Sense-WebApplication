import React, {useEffect, useState} from 'react';
import classes from '../../Styles/main.module.css';
import {trackPromise} from "react-promise-tracker";
import {useDispatch, useSelector} from "react-redux";
import {Link} from 'react-router-dom';
import {productsFetch} from "../../store/slices/product-slice";
import {TailSpin} from "react-loader-spinner";

const SuggestionProducts = (props) =>{
    const dispatch = useDispatch();
    useEffect( () =>{
        dispatch(productsFetch())
    },[]);
    return(
        <div className={`${classes.container} ${classes.suggestionProducts}`}>
            <h1 className={classes.title}> محصولات مرتبط</h1>
            <ul className={classes['suggestionProducts__cardWrapper']}>
                {props.status === "success" ? (
                    props.items.slice(1,4).map(item =>{
                        return(
                            <li className={`${classes.card}`} key={item.id}>
                                <Link to={`/productDetail/${item.id}`}>
                                    <div className={classes['card__img']}>
                                        <img src={item.attributes.image.data[0].attributes.alternativeText} alt={item.attributes.name}/>
                                    </div>
                                    <div className={classes['card__info']}>
                                        <p>{item.attributes.name}</p>
                                        <p>{item.attributes.price} {item.attributes.currency} </p>
                                    </div>
                                 </Link>
                            </li>
                        )
                    })
                ): props.status === "pending" ? (
                    <TailSpin ariaLabel="loading-indicator" />
                ):<p>یک خطای غیر منتظره رخ داد...</p>
                }
            </ul>
        </div>
    )
}
export default SuggestionProducts;