import React from 'react'
import {Link} from 'react-router-dom'
import '../res/Header.css'

const Header = () => {
    return (
        <div className='center'>
            <div className="shopcart">
                <Link to="/shoppingCart">Shopping Cart(0)</Link>
            </div>
            <div>
                <ul className="login">
                    <li>
                        <Link to='/login'>Log In</Link>
                    </li>
                    <li>
                        <Link to='/register'>Register</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Header