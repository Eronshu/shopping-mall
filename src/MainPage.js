import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from "./App";
import ItemDetails from "./ItemDetails";
import Login from "./Login";
import Register from "./Register";
import ShoppingCart from "./ShoppingCart";
import { getAllCartItems} from "./api/shoppingCartApi";
import { AdminReport } from "./AdminReport";
import Checkout from "./Checkout";
import Header from "./components/Header";
import RecoveryQuestion from "./RecoveryQuestion";
import ResetPassword from "./ResetPassword";

function MainPage() {
  const [data, setDataState] = useState(JSON.parse(localStorage.getItem("shopList"))||[]);

  
  const [isLogin, setIslogin] = useState(localStorage.getItem("token"));
  const [isAdmin, setIsAdmin] = useState(
    Boolean(eval(localStorage.getItem("is_admin")))
  );
  const setData = (cart)=>{
    if(!isLogin){
      localStorage.setItem("shopList",JSON.stringify(cart));
    }
    setDataState(cart);
  }
  return (
    <Router basename='/EECS4413Project'>
      <div>
        <Header
          data={data}
          setData={setData}
          isLogin={isLogin}
          isAdmin={isAdmin}
          setIslogin={setIslogin}
        />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <App
                data={data}
                setData={setData}
                isLogin={isLogin}
                isAdmin={isAdmin}
              />
            }
          ></Route>
          <Route
            path="/details/:id"
            element={
              <ItemDetails data={data} setData={setData} isLogin={isLogin} />
            }
          ></Route>
          <Route
            path="/shoppingCart"
            element={
              <ShoppingCart data={data} setData={setData} isLogin={isLogin} />
            }
          ></Route>
          <Route
            path="/login"
            element={<Login data={data} setData={setData} setIslogin={setIslogin} setIsAdmin={setIsAdmin} />}
          ></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/adminReport" element={<AdminReport />}></Route>
          <Route path="/checkout" element={<Checkout data={data} setData={setData} />}></Route>
          <Route
            path="/RecoveryQuestion"
            element={<RecoveryQuestion />}
          ></Route>
          <Route
            path="/resetPassword"
            element={<ResetPassword isLogin={isLogin} />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default MainPage;
