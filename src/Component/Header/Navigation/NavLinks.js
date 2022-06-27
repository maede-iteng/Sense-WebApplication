import React from 'react';
import classes from "../../../Styles/main.module.css";
import {NavLink} from "react-router-dom";

const NavLinks = () =>{
    return(
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
    )
}
export default NavLinks;