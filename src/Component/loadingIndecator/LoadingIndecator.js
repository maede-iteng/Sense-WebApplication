import { usePromiseTracker } from "react-promise-tracker";
import { BallTriangle } from  'react-loader-spinner';
import classes from '../../Styles/main.module.css';

const LoadingIndicator = () => {
    const { promiseInProgress } = usePromiseTracker();
    return (promiseInProgress &&
        <div className={classes.loading}>
            <BallTriangle
                heigth="50"
                width="50"
                color='grey'
                ariaLabel='loading'
            />
        </div>
    )
}
export default LoadingIndicator;