import React, {useEffect} from 'react';
import classes from '../Styles/main.module.css';
import posts from '../Component/posts.json';
import {truncate} from '../assets/utilites/truncate';
import Footer from '../Component/Footer/Footer';
import {Link} from "react-router-dom";

const Blog = () =>{

    return(
        <React.Fragment>
            <div className={`${classes.container} ${classes.blog}`}>
                <h1>بلاگ</h1>
                <div className={classes['blog__posts']}>
                    {posts.map(post => {
                        return(
                            <Link to={`/postDetail/${post.id}`} key={post.id}>
                                <div className={classes['blog__post']} key={post.id}>
                                    <div className={`${classes['blog__postImg']}`}>
                                        <img src={post.imgUrl} alt={post.title}/>
                                    </div>
                                    <div className={classes['blog__info']}>
                                        <h2>{post.title}</h2>
                                        <span>{post.date}</span>
                                        <p>{truncate(post.body , 150)}</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    )
}
export default Blog;