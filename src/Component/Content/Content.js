import React , {useMemo} from 'react';
import poster from '../../assets/images/bg.jpg';
import classes from '../../Styles/main.module.css';
import TrustedProductsCard from "./TrustedProductsCard";
import SuggestionProducts from "./SuggestionProducts";
import ProductCategory from "./ProductCategory";
import Footer from '../Footer/Footer';
import ProductFeatures from "../ProductFeatures/ProductFeatures";
import Quote from "../Quote/Quote";
import {useSelector} from "react-redux";
const Content = () =>{
    const {items , status} = useSelector(state => state.products);
    return(
        <React.Fragment>
            <div className={`${classes.content} ${classes.container}`}>
                <div className={classes['content__description']}>
                    <div className={classes.text}>
                        <h1>درخشش طبیعی پوست</h1>
                        <p>برای داشتن پوستی درخشان و طبیعی از مراقبت به وسیله گیاهان لذت ببرید.</p>
                        <button>خرید</button>
                    </div>
                </div>
                <div className={classes['content__poster']}>
                    <img src={poster} alt="posterImage"/>
                </div>
            </div>
            <TrustedProductsCard title='خرید مطمئن ترین محصولات ما'
                                 items={items}
                                 status={status}
            />
            <Quote quote='“ ماموریت ما ارائه محصولات با کیفیت بالا است که روی حیوانات آزمایش نشده و برای محیط زیست کاملاً ایمن هستند.”'
                    author='مؤسس سِنس'
            />
            <SuggestionProducts items={items} status={status}/>
            <ProductFeatures vegan='کل مجموعه ما وگان و عاری از ظلم است.'
                             natural='ما فقط از بهترین مواد طبیعی استفاده می کنیم.'
                             recyclable='تمام بسته بندی ها قابل بازیافت و سازگار با محیط زیست هستند.'
                             compostable='سفارشات با بسته بندی تجزیه پذیر ارسال می شود.'
            />
            <ProductCategory/>
            <Footer/>
        </React.Fragment>

    )
}
export default Content;