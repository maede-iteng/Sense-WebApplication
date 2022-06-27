import React, {useEffect, useState} from 'react';
import classes from '../../Styles/main.module.css';
import {Link} from 'react-router-dom';

const TrustedProducts= ({item}) =>{
    return(
        <Link to={`/productDetail/${item.id}`} key={item.id}>
            <div className={`${classes.card} ${classes.products}`}>
                <div className={classes['card__img']}>
                    <img src={item.attributes.image.data[0].attributes.alternativeText} className={classes['card__img--main']}  alt={item.attributes.name}/>
                    <img src={item.attributes.image.data[1].attributes.alternativeText} className={classes['card__img--hover']}  alt={item.attributes.name}/>
                </div>
                <div className={classes['card__info']}>
                    <p>{item.attributes.name}</p>
                    <p>{item.attributes.price} {item.attributes.currency}</p>
                </div>
            </div>
        </Link>

    )
}
export default TrustedProducts;