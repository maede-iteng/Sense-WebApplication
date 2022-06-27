import React,{useState} from 'react';
import classes from '../../Styles/main.module.css';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import ArrowDropUpOutlinedIcon from '@material-ui/icons/ArrowDropUpOutlined';

const Accordion = ({icon,title,content}) =>{
    const [isActive, setIsActive] = useState(false);
    return(
        <div>
            <div className={classes["accordion-title"]} onClick={() => setIsActive(!isActive)}>
                <div className={classes["accordion-title--modify"]}>
                    {icon} {title}
                </div>
                <div>{isActive ?  <ArrowDropUpOutlinedIcon/>: <ArrowDropDownOutlinedIcon/>}</div>
            </div>
            {isActive && <div className={classes["accordion-content"]}>{content}</div>}
        </div>
    )
}
export default Accordion;