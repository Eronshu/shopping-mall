import React from 'react'

import {Link} from "react-router-dom";
class Checkout extends React.Component {
    render(){
        return (
            <div className="Checkout">
                <header className="header">
                    <h3 className="title">Checkout</h3>
                </header>
                <main className="container">
                    {/*{this.buildTable()}*/}
                </main>
                <footer className="CheckoutFooter">
                    <Link to="/">Login</Link>
                    <Link to="/">Create a new account</Link>
                </footer>
            </div>
        )
    }
}
export default Checkout