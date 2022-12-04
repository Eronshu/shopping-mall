import React, { Component } from 'react'
import ReactDOM from 'react-dom/client';
import App from "./App";
import ShoppingCart from "./ShoppingCart";
import {BrowserRouter, Routes, Route, withRouter } from 'react-router-dom'
import Login from "./Login"
import Register from "./Register"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>

    <BrowserRouter>
    <div>
        <Routes>
            <Route  path="/shoppingCart" exact component={ShoppingCart}/>
            <Route  path='/login' component={Login}/>
            <Route  path='/register' component={Register}/>
            <Route exact path='/' component={App}/>
        </Routes>
    </div>
        <App/>
    </BrowserRouter>
    </div>
);