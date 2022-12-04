import React from 'react'

import {Link} from "react-router-dom";
class ShoppingCart extends React.Component {
    render(){
        return (
            <div className="CartRoot">
                <header className="header">
                    <h3 className="title">My Shopping Cart</h3>
                </header>
                <main className="container">
                    {/*{this.buildTable()}*/}
                </main>
                <footer className="CartFooter">
                    <Link to="/">Continue shopping</Link>
                    <p className="totalMoney">Total(Tax not include)：<span className="totalnum">$1234</span></p>
                    <p className="submit" onClick={this.onSubmit}>Check Out</p>
                </footer>
            </div>
        )
    }
}
export default ShoppingCart