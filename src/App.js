import React from 'react';
import classes from './Styles/main.module.css';
import {BrowserRouter as Router , Route , Routes} from "react-router-dom";
import Content from "./Component/Content/Content";
import Header from './Component/Header/Header';
import SkinCare from "./Pages/SkinCare";
import HairCare from "./Pages/HairCare";
import BodyCare from "./Pages/BodyCare";
import NailPolish from "./Pages/Cosmetics";
import Blog from "./Pages/Blog";
import AboutUs from "./Pages/AboutUs";
import PostDetail from "./Pages/PostDetail";
import ProductDetails from "./Pages/ProductDetails";
import ShoppingCart from "./Pages/ShoppingCart";
import Cosmetics from "./Pages/Cosmetics";
function App() {
  return (
    <React.Fragment>
        <Header/>
        <Routes>
            <Route path="/" exact element={<Content/>}></Route>
            <Route path="/skinCare"  element={<SkinCare/>}></Route>
            <Route path="/hairCare"  element={<HairCare/>}></Route>
            <Route path="/bodyCare"  element={<BodyCare/>}></Route>
            <Route path="/cosmetics"  element={<Cosmetics/>}></Route>
            <Route path="/blog"  element={<Blog/>}></Route>
            <Route path="/aboutUs"  element={<AboutUs/>}></Route>
            <Route path="/productDetail/:productId"  element={<ProductDetails/>}></Route>
            <Route path="/postDetail/:postId"  element={<PostDetail/>}></Route>
            <Route path="/shoppingCart"  element={<ShoppingCart/>}></Route>
        </Routes>
    </React.Fragment>
  );
}

export default App;
