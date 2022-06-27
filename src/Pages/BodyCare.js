import React, {useEffect, useRef, useState} from 'react';
import classes from '../Styles/main.module.css';
import {useDispatch, useSelector} from "react-redux";
import {Link} from 'react-router-dom';
import {bodyCareProducts} from "../store/slices/bodyCareProducts-slice";
import {filterBySort} from '../store/slices/bodyCareProducts-slice';
import Footer from "../Component/Footer/Footer";
import {TailSpin} from "react-loader-spinner";
import SuggestionProducts from "../Component/Content/SuggestionProducts";
import TrustedProducts from "../Component/Content/TrustedProducts";

const BodyCare = () =>{
    const {bodyCareItems , status,filteredItem} = useSelector(state => state.bodyCare);
    const dispatch = useDispatch();
    useEffect( () =>{
        dispatch(bodyCareProducts())
    },[]);

    return(
        <React.Fragment>
            <div className={`${classes.container} ${classes['productsPage']}`}>
                <h1>مراقبت از پوست</h1>
                <p>با یک روتین کاملاً طبیعی و گیاهی، ظاهر و احساس پوست خود را به بهترین شکل حفظ کنید. ♡</p>
                <section className={classes['productsPage__products']}>
                    <div className={classes['productsPage__filterByAvailability']}>
                        <div className={classes['productsPage__selectField']}>
                            <span>{bodyCareItems.length}  :تعداد محصولات </span>
                        </div>
                    </div>
                    <div className={classes['productsPage__filterBySelect']}>
                        <label htmlFor="sortBy">مرتب سازی:</label>
                        <select id="sortBy" onChange={event => dispatch(filterBySort(event.target.value))}>
                            <option selected disabled> یک مورد را انتخاب کنید</option>
                            <option value="asc">بیشترین قیمت</option>
                            <option value="desc">کمترین قیمت</option>
                        </select>
                    </div>
                </section>
                <div className={classes.cardWrapper}>
                    {status === "success" ? (
                        filteredItem.map((item) => <TrustedProducts item={item}/>)
                    ): status === "pending" ?(
                        <TailSpin ariaLabel="loading-indicator" />
                    ) : <p>یک خطای غیر منتظره رخ داد...</p>
                    }
                </div>
            </div>
            <SuggestionProducts items={bodyCareItems} status={status}/>
            <Footer/>
        </React.Fragment>
    )
}
export default BodyCare;