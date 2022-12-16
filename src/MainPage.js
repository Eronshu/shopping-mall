import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from "./App";
import ItemDetails from "./ItemDetails";
import Login from "./Login";
import Register from "./Register";
import ShoppingCart from "./ShoppingCart";
import { getAllCartItems, getCartMock } from "./api/shoppingCartApi";
import { AdminReport } from "./AdminReport";
import Checkout from "./Checkout";
import { ThemeProvider } from "@mui/material/styles";
import Header from "./components/Header";

function MainPage() {
  const [data, setData] = useState([]);
  const [isLogin, setIslogin] = useState(localStorage.getItem("token"));
  // const [isLogin, setIslogin] = useState(false)
  const [isAdmin, setIsAdmin] = useState(
    Boolean(eval(localStorage.getItem("is_admin")))
  );
  // Fetch the cart data on component mount
  useEffect(() => {
    getAllCartItems().then((res) => {
      setData(res.data.data);
    });
  }, []);

  return (
    <Router>
      <div>
        <Header data={data} />

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
            element={<Login setIslogin={setIslogin} setIsAdmin={setIsAdmin} />}
          ></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/adminReport" element={<AdminReport />}></Route>
          <Route path="/checkout" element={<Checkout data={data} />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default MainPage;
