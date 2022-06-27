import React from 'react';
import classes from '../../Styles/main.module.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Pagination,Navigation,FreeMode } from "swiper";

const MobileSlider = (props) =>{
    return(
        <React.Fragment>
                    <div className={classes['mobileSlider']}>
                        <section className={classes['productImg']}>
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={20}
                                freeMode={true}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[FreeMode, Pagination,Navigation]}
                                className="mySwiper"
                            >
                                <ul>
                                    {props.detail.attributes.image.data.map(img => {
                                        return(
                                            <SwiperSlide ke={img.id}>
                                                <li>
                                                    <img src={img.attributes.alternativeText} alt={props.detail.attributes.name}/>
                                                </li>
                                            </SwiperSlide>
                                        )})}
                                </ul>
                            </Swiper>
                        </section>
                    </div>
        </React.Fragment>
    )
}
export default MobileSlider;