import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import posts from '../Component/posts.json';
import classes from '../Styles/main.module.css';
import Footer from '../Component/Footer/Footer';

const PostDetail = () =>{
    const {postId} = useParams();
    const detail = posts.find(post => post.id === postId);
    const navigate = useNavigate();
    if(!detail){
        return <p>Not Found</p>
    }
    const previousPageHandler = () =>{
        navigate('/blog')
    }
    return(
        <React.Fragment>
            <div className={`${classes.container} ${classes.postDetail}`}>
                <img src={detail.imgUrl} alt={detail.title} className={classes['postDetail__img']}/>
                <div className={classes.description}>
                    <h1>{detail.title}</h1>
                    <span>{detail.date}</span>
                    <p>{detail.body}</p>
                    <p>{detail.description}</p>
                </div>
                <button type="button" onClick={ previousPageHandler}>
                    برگشتن به بلاگ
                    <ion-icon name="arrow-back-outline"></ion-icon>
                </button>
            </div>
            <Footer/>
        </React.Fragment>
    )
}
export default PostDetail;