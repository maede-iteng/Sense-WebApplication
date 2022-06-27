import React, {useEffect, useMemo, useRef} from 'react';
import {useParams, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import classes from '../Styles/main.module.css';
import {productsFetch} from "../store/slices/product-slice";
import Quantity from "../Component/Quantity/Quantity";
import Footer from "../Component/Footer/Footer";
import TrustedProductsCard from "../Component/Content/TrustedProductsCard";
import ProductFeatures from "../Component/ProductFeatures/ProductFeatures";
import Quote from "../Component/Quote/Quote";
import Accordion from "../Component/Accordion/Accordion";
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import FeaturedPlayListOutlinedIcon from '@material-ui/icons/FeaturedPlayListOutlined';
import {addItemToCart} from "../store/slices/cart-slice";
import {TailSpin} from "react-loader-spinner";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import MobileSlider from "../Component/MobileSlider/MobileSlider";

const ProductDetails = () =>{
    const {items, status} = useSelector(state => state.products);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect( () =>{
        dispatch(productsFetch())
    },[]);

    let { productId } = useParams();
    const detail = items.find(item => item.id == productId);
    let accordionData = [];
    if(status === 'success') {
        accordionData = [
            {
                icon: <FeaturedPlayListOutlinedIcon/>,
                title: 'ویژگی ها',
                content: detail.attributes.features,
            },
            {
                icon: <ModeCommentOutlinedIcon/>,
                title: 'طریقه مصرف ',
                content: detail.attributes.howToUse,
            },
        ]
    }
    const addToCartHandler = () =>{
        dispatch(addItemToCart({
            id:detail.id,
            name:detail.attributes.name,
            img:detail.attributes.image.data[0].attributes.alternativeText,
            price:detail.attributes.price,

        }));
        // navigate('/shoppingCart');
    }
    return(
        <React.Fragment>
            <div className={`${classes.container} ${classes.productDetail} `}>
                {status === 'success' ? (
                    <>
                        <section className={`${classes.productImg} ${classes.disableSlider}`}>
                            <ul>
                                {detail.attributes.image.data.map(img => {
                                    return(
                                    <li key={img.id}>
                                        <img src={img.attributes.alternativeText} alt={detail.attributes.name}/>
                                    </li>
                                    )})}
                            </ul>
                        </section>
                        <MobileSlider detail={detail}/>
                        <section className={classes.productDescription}>
                            <div className={classes.sticky}>
                                <h1>{detail.attributes.name} {detail.attributes.brand}</h1>
                                <p className={classes.price}>{detail.attributes.price} {detail.attributes.currency}</p>
                                <p>تعداد:</p>
                                <Quantity item={{
                                    id:detail.id,
                                    name:detail.attributes.name,
                                    img:detail.attributes.image.data[0].attributes.alternativeText,
                                    price:detail.attributes.price,
                                }}/>
                                <button type='button' className={classes.btnShop} onClick={addToCartHandler}>
                                    اضافه کردن به سبد خرید
                                    <ion-icon name="bag-handle-outline"></ion-icon>
                                </button>
                                <p>{detail.attributes.description}</p>
                                <div className={classes["accordion"]}>
                                    {accordionData.map(({icon, title, content}) => (
                                        <Accordion icon={icon} title={title} content={content} />
                                    ))}
                                </div>
                            </div>
                        </section>
                    </>
                    ):status === "pending" ?(
                    <TailSpin ariaLabel="loading-indicator" />
                    ):<p>یک خطای غیر منتظره رخ داد...</p>
                }
            </div>
            <Quote quote='“هر محصول نه تنها با برخی از بهترین مواد گیاهی، بلکه با کمی شادی و مهربانی نیز همراه است”'
                   author='مؤسس سِنس'
            />
            <ProductFeatures/>
            <TrustedProductsCard title='محصولات دیگر ما'
                                 items={items}
                                 status={status}
            />
            <Footer/>
        </React.Fragment>
    )
}
export default ProductDetails;