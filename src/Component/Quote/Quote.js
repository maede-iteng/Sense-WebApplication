import React from 'react';
import classes from "../../Styles/main.module.css";

const Quote = ({quote,author}) =>{
    return(
        <div className={`${classes.quote} ${classes.container}`}>
            <h1>{quote}</h1>
            <p>{author}</p>
        </div>
    )
}
export default Quote;