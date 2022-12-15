import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='center'>
                <div className="shopcart">
                    <Link to='/shoppingCart'>Shopping Cart{this.props.items.length ? "("+this.props.items.length+")" : null}</Link>
                    {/*</BrowserRouter>*/}
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
        );
    }
}

export default Header;