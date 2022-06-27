import React from 'react';
import classes from "../../../Styles/main.module.css";
import NavLinks from './NavLinks';

const Navigation = () =>{
    return(
        <nav className={classes.nav}>
            <NavLinks/>
        </nav>

    )
}
export default Navigation;