import React , {useState} from 'react';
import classes from '../Styles/main.module.css';
import flowerImg from '../assets/images/flower-large.webp';
import founder from "../assets/images/founder.jpg";
import store from "../assets/images/store.jpg";
import Footer from '../Component/Footer/Footer';
import Quote from "../Component/Quote/Quote";

const AboutUs = () =>{
    const [inputName , setInputName] = useState('');
    const [inputEmail , setInputEmail] = useState('');
    const [inputPhoneNumber , setInputPhoneNumber] = useState('');
    const [comment , setComment] = useState();

    const nameInputChangeHandler = (event) =>{
        setInputName(event.target.value);
    }
    const emailInputChangeHandler = (event) =>{
        setInputEmail(event.target.value);
    }
    const phoneNumberInputChangeHandler = (event) =>{
       setInputPhoneNumber(event.target.value);
    }
    const commentChangeHandler = (event) =>{
        setComment(event.target.value);
    }
    const formSubmissionHandler = (event) =>{
        event.preventDefault();
        setInputName('');
    }

    return(
        <React.Fragment>
            <div className={`${classes.aboutUs} ${classes.container} `}>
                <h1>درباره ما</h1>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد.</p>
                <img src={flowerImg} alt="flower"/>
            </div>
            <Quote quote='“ ماموریت ما ارائه محصولات با کیفیت بالا است که روی حیوانات آزمایش نشده و برای محیط زیست کاملاً ایمن هستند.”'
                   author='مؤسس سِنس'
            />
            <div className={`${classes['aboutUs__content']} ${classes.container}`}>
                <div className={classes.text}>
                    <h2>با مرلین، بنیانگذار BKIND آشنا شوید</h2>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.  </p>
                </div>
                <div className={classes.posterImg}>
                    <img src={founder} alt="posterImage"/>
                </div>
            </div>
            <div className={`${classes['aboutUs__content']} ${classes.container}`}>
                <div className={classes.posterImg}>
                    <img src={store} alt="posterImage"/>
                </div>
                <div className={`${classes['aboutUs__desc']}`}>
                    <h2>فروشگاه ما</h2>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده </p>
                </div>
            </div>
            <div className={`${classes.contactForm}`}>
                <h1>ارتباط با ما</h1>
                <p>سوال یا نظری دارید؟ مشخصات خود را وارد کنید و ما خوشحال خواهیم شد که با شما تماس بگیریم.</p>
                <form className={`${classes.form} ${classes.container}`} onSubmit={formSubmissionHandler}>
                    <div className={`${classes['nameAndEmail__input']}`}>
                        <input type="text"
                               placeholder="اسم"
                               className={classes.input}
                               required
                               value={inputName}
                               onChange={nameInputChangeHandler}
                        />
                        <input type="email"
                               placeholder="ایمیل*"
                               className={classes.input}
                               required
                               value={inputEmail}
                               onChange={emailInputChangeHandler}
                        />
                    </div>
                    <input type="tel"
                           placeholder="شماره تلفن"
                           className={classes.input}
                           required
                           value={inputPhoneNumber}
                           onChange={phoneNumberInputChangeHandler}
                    />
                    <textarea placeholder="نظر"
                              className={classes.input}
                              value={comment}
                              onChange={commentChangeHandler}
                    ></textarea>
                    <button type="submit">ارسال</button>
                </form>
            </div>
            <Footer/>
        </React.Fragment>
    )
}
export default AboutUs;