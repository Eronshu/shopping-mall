import React from 'react'
import {Link, BrowserRouter} from 'react-router-dom'
import './res/Header.css'
import ShoppingCart from "./ShoppingCart";

const Header = () => {
    return (
        <div className='center'>
            <div className="shopcart">
                {/*<BrowserRouter>*/}
                {/*<a href="/ShoppingCart">Shopping Cart(0)</a>*/}
                <Link to='/shoppingCart'>Shopping Cart(0)</Link>
                {/*</BrowserRouter>*/}
            </div>
            <div>
                <ul className="login">
                    <li>
                        {/*<BrowserRouter>*/}
                        <Link to='/login'>Log In</Link>
                        {/*<a href="./login">Log In</a>*/}
                        {/*</BrowserRouter>*/}
                    </li>
                    <li>
                        {/*<BrowserRouter>*/}
                        <Link to='/register'>Register</Link>
                        {/*</BrowserRouter>*/}
                        {/*<a href="./login">Register</a>*/}
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Header