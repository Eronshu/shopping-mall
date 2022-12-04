import './ShoppingCart'
import './res/App.css';
import './components/Header';
import './Category'
import './Main'
// import Header from "./components/Header";
import {Route, BrowserRouter, Link} from 'react-router-dom'
import Category from "./Category";
import Item from "./Item";
import Footer from "./Footer";
import ShoppingCart from "./ShoppingCart";
import React from "react";
import Header from "./Header"
import Main from "./Main"
function App() {
    return (
        <div>
            <Header/>
            {/*<Category/>*/}
            <div>
                <Main/>
            </div>
            <div className='footer'>
                <Footer/>
            </div>


        </div>


    );
}
export default App;
