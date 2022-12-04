import React from "react";
import Header from "./components/Header";
import Category from "./Category";
import {Link} from "react-router-dom";
import Footer from "./Footer";
import './res/App.css';
export default class App2 extends Comment{
    render() {
        return (
            <div>
                <Header/>
                <Category/>
                <div>
                    <p>
                        购物车跳转测试
                    </p>
                    <Link to='/shoppingCart'>Shopping Cart(0)</Link>
                </div>
                <div className='footer'>
                    <Footer/>
                </div>
            </div>
        );
    }
}