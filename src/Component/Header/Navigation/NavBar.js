import React from 'react';
import classes from "../../../Styles/main.module.css";
import {NavLink} from "react-router-dom";
import MobileNav from "./MobileNav";
import Navigation from "./Navigation";

const NavBar = () =>{
    return(
            <div className={classes.navBar}>
                <Navigation/>
                <MobileNav/>
            </div>
    )
}
export default NavBar;