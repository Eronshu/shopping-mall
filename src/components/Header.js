import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { message } from "antd";
import "../res/Header.css";
import { logout } from "../api";

const Header = (props) => {
  const navigate = useNavigate();

  const logoutBtn = () => {
    // debugger
    // console.log(localStorage.getItem('token'))
    logout()
      .then((res) => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("is_admin");
        message.success("log out success");
        navigate(`/login`);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="center">
      <div className="shopcart">
        <Link to="/shoppingCart">Shopping Cart({props.data.length})</Link>
      </div>
      <div>
        {!props.isLogin && (
          <ul className="login">
            <li>
              <Link to="/login">Log In</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        )}
        {/*//user */}
        {props.isLogin && !props.isAdmin && (
          <ul className="login">
            <li>
              <a href="#">welcome</a>
            </li>
            <li>
              <a href="#" onClick={logoutBtn}>
                log out
              </a>
            </li>
          </ul>
        )}
        {/*admin*/}
        {props.isLogin && props.isAdmin && (
          <ul className="login">
            <li>
              <Link to="/adminReport">report</Link>
            </li>
            <li>
              <a href="#" onClick={logoutBtn}>
                log out
              </a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};
export default Header;
