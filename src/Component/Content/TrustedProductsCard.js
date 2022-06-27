import React, {useEffect, useState} from 'react';
import classes from '../../Styles/main.module.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination,Navigation } from "swiper";
import SwiperCore, { Autoplay } from 'swiper';
import {useDispatch, useSelector} from "react-redux";
import {productsActions ,productsFetch} from "../../store/slices/product-slice";
import TrustedProducts from './TrustedProducts';
import {TailSpin} from "react-loader-spinner";

const TrustedProductsCard = ({title, items, status}) =>{
    SwiperCore.use([Autoplay]);
    const dispatch = useDispatch();
    useEffect( () =>{
        dispatch(productsFetch());
    },[]);
    return(
            <div className={classes.container}>
                <h1 className={classes.title}>{title}</h1>
                <div className={classes.cardWrapper}>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        grabCursor={true}
                        autoplay={{
                            delay:2000,
                            disableOnInteraction: false
                        }}
                        breakpoints={{
                            // when window width is >= 640px
                            320: {
                                width: 320,
                                slidesPerView: 1,
                                spaceBetween: 10
                            },
                            480: {
                                width: 480,
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            640: {
                                width: 640,
                                slidesPerView: 3,
                                spaceBetween: 30
                            },
                            768:{
                                width:768,
                                slidesPerView: 3,
                                spaceBetween: 30
                            }
                        }}
                        modules={[Pagination,Autoplay]}
                        className="mySwiper"
                    >
                    {status === "success" ? (
                        items.map((item) => {
                            return(
                            <SwiperSlide key={item.id}>
                                <TrustedProducts item={item}/>
                            </SwiperSlide>

                            )
                        })
                    ): status === "pending" ?(
                        <TailSpin ariaLabel="loading-indicator" />
                    ):<p>یک خطای غیر منتظره رخ داد...</p>
                    }
                    </Swiper>

                </div>
            </div>
    )
}
export default TrustedProductsCard;