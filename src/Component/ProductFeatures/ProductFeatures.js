import React from 'react';
import classes from "../../Styles/main.module.css";
import rabbitImage from "../../assets/images/rabbit.png";
import leafImage from "../../assets/images/leaf.png";
import recycleImage from "../../assets/images/recycle.png";
import trashImage from "../../assets/images/trash-bin.png";

const ProductFeatures = ({vegan,natural,recyclable,compostable}) =>{
    return(
            <div className={`${classes.advantageSection} ${classes.container}`}>
                <div className={classes['advantageSection__item']}>
                    <img src={rabbitImage} alt=""/>
                    <h2>وگان</h2>
                    <p>{vegan}</p>
                </div>
                <div className={classes['advantageSection__item']}>
                    <img src={leafImage} alt=""/>
                    <h2>طبیعی</h2>
                    <p>{natural}</p>
                </div>
                <div className={classes['advantageSection__item']}>
                    <img src={recycleImage} alt=""/>
                    <h2>قابل بازیافت</h2>
                    <p>{recyclable}</p>
                </div>
                <div className={classes['advantageSection__item']}>
                    <img src={trashImage} alt=""/>
                    <h2>تجزیه پذیر</h2>
                    <p>{compostable}</p>
                </div>
            </div>
    )
}
export default ProductFeatures;