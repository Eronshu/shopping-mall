import React, { Component } from 'react'
import ReactDOM from 'react-dom/client';
import App from "./App";
import ShoppingCart from "./ShoppingCart";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from "./Login"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>

    <BrowserRouter>
    <div>
        <Routes>

            <Route  path="/shoppingCart" exact component={ShoppingCart}/>
            <Route  path='/login' component={Login}/>
            <Route  path='/register' component={ShoppingCart}/>
        <Route exact path='/' component={App}/>
        </Routes>
    </div>
        <App/>
    </BrowserRouter>
    </div>
);