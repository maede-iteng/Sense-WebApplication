import React from 'react';
import classes from '../../Styles/main.module.css';
import flowerImg from '../../assets/images/flower.png';
import {NavLink,Link} from "react-router-dom";

const Footer = () =>{
    return(
        <div className={classes.footer}>
            <div className={classes['footer__description']}>
                <h1>20% تخفیف برای اولین سفارش </h1>
                <p>برای دریافت پیشنهادات منحصر به فرد و آخرین اخبار به لیست ایمیل ما بپیوندید.</p>
                <div className={classes['input__wrapper']}>
                    <input type="email" placeholder="ایمیل"/>
                </div>
            </div>
            <div className={`${classes.container} ${classes['footer__content']}`}>
                <div className={classes['footer__navSection']}>
                    <h2>فهرست</h2>
                    <ul>
                        <li>
                            <NavLink className={({isActive}) => (isActive ? `${classes.active}` : null)} to="/skinCare">مراقبت از پوست</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) => (isActive ? `${classes.active}` : null)} to="/hairCare"> مراقبت از مو</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) => (isActive ? `${classes.active}` : null)} to="/bodyCare">مراقبت از بدن</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) => (isActive ? `${classes.active}` : null)} to="/cosmetics">آرایشی</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) => (isActive ? `${classes.active}` : null)} to="/blog">بلاگ</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) => (isActive ? `${classes.active}` : null)} to="/aboutUs">درباره ما</NavLink>
                        </li>
                    </ul>
                </div>
                <div className={classes['footer__location']}>
                    <h2>فروشگاه ما</h2>
                    <p>لورم ایپسوم متن ساختگی<br/>
                        با تولید سادگی نامفهوم از صنعت چاپ<br/>
                        <strong>شنبه - سه شنبه</strong> 9 صبح - 7 بعدازظهر<br/>
                        <strong>جمعه - سه شنبه</strong> 9 صبح - 10 شب
                    </p>
                </div>
                <div className={classes['footer__flowerImage']}>
                    <img src={flowerImg} alt="flower image"/>
                </div>
                <div className={classes['footer__promiseText']}>
                    <h2>شعار ما</h2>
                    <p>ایجاد کیفیت بالا<br/>
                        بر پایه مواد گیاهی<br/>
                        برای مردم و کره زمین
                    </p>
                </div>
            </div>
            <div className={classes['footer__socialMedia']}>
                <ul>
                    <li>
                        <Link to="#"><ion-icon name="logo-twitter"></ion-icon></Link>
                    </li>
                    <li>
                        <Link to="#"><ion-icon name="logo-facebook"></ion-icon></Link>
                    </li>
                    <li>
                        <Link to="#"><ion-icon name="logo-instagram"></ion-icon></Link>
                    </li>
                    <li>
                        <Link to="#"><ion-icon name="logo-whatsapp"></ion-icon></Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Footer;