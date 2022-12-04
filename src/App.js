import './ShoppingCart'
import './res/App.css';
import './components/Header';
import './Category'
// import Header from "./components/Header";
import {Route, BrowserRouter, Link} from 'react-router-dom'
import Category from "./Category";
import Item from "./Item";
import Footer from "./Footer";
import ShoppingCart from "./ShoppingCart";
import React from "react";
import Header from "./Header"
function App() {
    return (
        <div>
            <Header/>
            {/*<Category/>*/}
            <div>
                <p>
                    购物车跳转测试
                </p>
            <Link to="/shoppingCart">Shopping Cart(0)</Link>
                <ShoppingCart/>
            </div>
            <div className='footer'>
                <Footer/>
            </div>


        </div>


    );
}
export default App;
