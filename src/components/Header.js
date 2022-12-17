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

    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("is_admin");
    navigate(`/login`);

    props.setIslogin(false);
    props.setData([]);
    logout()
      .then((res) => {
        message.success("log out success");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="center">
      <div className="shopcart">
        <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
      </div>
      <div>
        {!props.isLogin && (
          <ul className="login">
            <li>
              <Link to="/shoppingCart">Shopping Cart({props.data.length})</Link>
            </li>
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
              <Link to="/shoppingCart">Shopping Cart({props.data.length})</Link>
            </li>
            <li>
              <Link to="/resetPassword">Reset Password</Link>
            </li>
            <li>
              <Link to="/RecoveryQuestion">Set Recovery</Link>
            </li>
            <li>
              <a href="#" onClick={logoutBtn}>
                Log Out
              </a>
            </li>
          </ul>
        )}
        {/*admin*/}
        {props.isLogin && props.isAdmin && (
          <ul className="login">
            <li>
              <Link to="/shoppingCart">Shopping Cart({props.data.length})</Link>
            </li>
            <li>
              <Link to="/adminReport">Report</Link>
            </li>
            <li>
              <Link to="/resetPassword">Reset Password</Link>
            </li>
            <li>
              <Link to="/RecoveryQuestion">Set Recovery</Link>
            </li>
            <li>
              <a href="#" onClick={logoutBtn}>
                Log Out
              </a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};
export default Header;
