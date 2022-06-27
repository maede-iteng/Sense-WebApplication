import React, {useEffect, useState} from 'react';
import classes from "../../Styles/main.module.css";
import cosmetic from "../../assets/images/c1.jpg";
import {baseURL} from '../General';
import axios from "axios";

const Card = () =>{
    const [data  , setData] = useState('');

    useEffect( () => {
        axios.get(baseURL).then(response =>{
            setData(response.data);
        })
    },[])

    return(
        <div className={classes.card}>
            <div className={classes['card__img']}>
                <img src={cosmetic} alt={data.name}/>
            </div>
            <p>{data.name}</p>
            <p>{data.price_sign}{data.price}{data.currency}</p>
        </div>
    )
}
export default Card;