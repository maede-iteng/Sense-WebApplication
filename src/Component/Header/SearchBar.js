import classes from "../../Styles/main.module.css";
import React, {useState,useMemo,useEffect} from "react";
import {useSelector} from "react-redux";
import {productsFetch} from "../../store/slices/product-slice";
import handleSearchProducts from '../../store/slices/searchProducts-slice';
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

const SearchBar = ({displaySearchBar,closeSearchBarHandler}) =>{
    const products = useSelector(state => state.products);
    const [searchTerm , setSearchTerm] = useState('');
    const [result , setResult] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productsFetch())
    }, []);

    const handleSearch = event => {
        setSearchTerm(event.target.value);
        setResult(true);
        if(event.target.value === ''){
            setResult(false);
        }
    };

    const searchResults = products.items.filter(item =>{
        if(searchTerm === " "){
            return ;
        }else if(item.attributes.name.toLowerCase().includes(searchTerm.toLowerCase())){
            return item;
        }
    }).map(item => {
        return(
            <Link to={`/productDetail/${item.id}`} key={item.id} onClick={closeSearchBarHandler}>
                    <div className={classes.products}>
                        <div className={classes['products__Img']}>
                            <img src={item.attributes.image.data[2].attributes.alternativeText} alt={item.attributes.name}/>
                        </div>
                        <div className={classes['products__Info']}>
                            <p>{item.attributes.name}</p>
                            <p className={classes['products__Price']}>{item.attributes.price} {item.attributes.currency}</p>
                        </div>
                    </div>
            </Link>
        )});

    return(
        <React.Fragment>
            {displaySearchBar && (
                <div className={classes.searchInputSection}>
                    <div className={classes.overlay}></div>
                    <ion-icon name="close" onClick={closeSearchBarHandler}></ion-icon>
                    <input type="text" placeholder="جستجو" onChange={handleSearch}/>
                    {result && (
                        <div className={classes.productWrapper}>
                            <p className={classes.title}>محصولات</p>
                            {searchResults.length === 0 ? <p>محصول مورد نظر شما یافت نشد.</p> : searchResults}
                        </div>
                    )}
                </div>
            )}
        </React.Fragment>
    )
}
export default SearchBar;