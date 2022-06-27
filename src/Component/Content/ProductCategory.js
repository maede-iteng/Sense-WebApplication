import React, {useEffect} from 'react';
import classes from '../../Styles/main.module.css';
import {useDispatch , useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {productsCategoryFetch} from "../../store/slices/productCategory-slice";
import {TailSpin} from "react-loader-spinner";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

const ProductCategory = () =>{
    const {items , status} = useSelector(state => state.productsCategory);
    const dispatch = useDispatch();
    useEffect( () =>{
        dispatch(productsCategoryFetch())
    },[]);

    return(
        <div className={classes.container}>
            <div className={`${classes['productCategory__cardWrapper']}`}>
                {status === "success" ? (
                    items.slice(1,4).map(item => {
                        return(
                                <Link to={`/${item.attributes.name}`} key={item.id}>
                                    <div className={`${classes['productCategory__card']}`}>
                                        <div className={classes['card__img']}>
                                            <img src={item.attributes.image.data.attributes.alternativeText} alt={item.attributes.name}/>
                                        </div>
                                        <div className={classes['card__info']}>
                                            <ion-icon name="arrow-forward-outline"></ion-icon>
                                            <h2>
                                                {item.attributes.persianName}
                                            </h2>
                                        </div>
                                    </div>
                                </Link>
                        )
                    })): status === "pending" ? (
                        <TailSpin ariaLabel="loading-indicator" />
                    ) : <p>یک خطای غیر منتظره رخ داد...</p>
                }
            </div>
        </div>
    )
}
export default ProductCategory;