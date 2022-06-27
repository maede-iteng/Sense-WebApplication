import React, {useState} from 'react';
import classes from "../../../Styles/main.module.css";
import NavLinks from './NavLinks';

const MobileNav = () =>{
    const [open, setOpen] = useState(false);
    const openNavbarHandler = () =>{
        setOpen(prev => !prev);
    }
    return(
        <nav className={classes.mobileNav}>
            <button className={classes.hamburger} onClick={openNavbarHandler}>
                {open ? <ion-icon name="close"></ion-icon>:<ion-icon name="menu"></ion-icon> }
            </button>
            {open && <NavLinks/>}
        </nav>
    )
}
export default MobileNav;