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
  const [data, setData] = useState([]);
  const [isLogin, setIslogin] = useState(localStorage.getItem("token"));
  const [isAdmin, setIsAdmin] = useState(
    Boolean(eval(localStorage.getItem("is_admin")))
  );
  let shopList=[];
  // const [shopList, setShopList] = useState([]);
  // Fetch the cart data on component mount
  useEffect(() => {
    if(isLogin) {
      getAllCartItems().then((res) => {
        setData(res.data.data);
      });
    }else{
      // setShopList(JSON.parse(localStorage.getItem('shopList')))
      console.log(shopList);
      setData(JSON.parse(localStorage.getItem('shopList')))
    }
  }, []);

  return (
    <Router>
      <div>
        <Header
          data={data}
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
              <ItemDetails data={data} setData={setData} shopList={shopList} isLogin={isLogin} />
            }
          ></Route>
          <Route
            path="/shoppingCart"
            element={
              <ShoppingCart data={data} setData={setData}  isLogin={isLogin} />
            }
          ></Route>
          <Route
            path="/login"
            element={<Login setIslogin={setIslogin} setIsAdmin={setIsAdmin} shopList={shopList} />}
          ></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/adminReport" element={<AdminReport />}></Route>
          <Route path="/checkout" element={<Checkout data={data} />}></Route>
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
