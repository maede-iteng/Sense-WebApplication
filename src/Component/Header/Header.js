import React, {useRef, useState} from 'react';
import classes from '../../Styles/main.module.css';
import { BrowserRouter as Router, Route, Link , Routes , NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import SearchBar from "./SearchBar";
import NavBar from "./Navigation/NavBar";

const Header = () =>{
    const cartQuantity = useSelector( state => state.cart.totalQuantity);
    // const searchInputRef = useRef();
    const [displaySearchBar , setDisplaySearchBar] = useState(false);
    const [hamburgerOpen , setHamburgerOpen] = useState(false);
    const toggleHamburgerMenuHandler = () =>{
        setHamburgerOpen(!hamburgerOpen);
    }
    const displaySearchInputHandler = () =>{
        setDisplaySearchBar(!displaySearchBar);
        document.getElementsByTagName("body")[0].style.overflowY = 'hidden';
    }
    const closeSearchBarHandler = () =>{
        setDisplaySearchBar(false);
        document.getElementsByTagName("body")[0].style.overflowY = 'auto';
    }

    return(
        <React.Fragment>
                <div className={`${classes.stickyNav} `}>
                    <div className={`${classes.header} ${classes.container}`}>
                        <button type='button' onClick={displaySearchInputHandler}>
                            <ion-icon name="search-outline"></ion-icon>
                        </button>
                        <Link to="/" className={classes['header__link']}>
                            <h2>SENSE</h2>
                        </Link>
                        <Link to="/shoppingCart" className={classes['header__shoppingIcon']}>
                            <ion-icon name="bag-handle-outline"></ion-icon>
                            <span className={classes['header__badge']}>{cartQuantity}</span>
                        </Link>
                    </div>
                    <NavBar/>
                </div>
            <SearchBar displaySearchBar={displaySearchBar} closeSearchBarHandler={closeSearchBarHandler} />
        </React.Fragment>
    )
}
export default Header;