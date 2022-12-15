import React from "react";
import { Link } from "react-router-dom";
import "../res/Header.css";

const Header = (props) => {
  return (
    <div className="center">
      <div className="shopcart">
        <Link to="/shoppingCart">Shopping Cart({props.data.length})</Link>
      </div>
      <div>
        <ul className="login">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Log In</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
