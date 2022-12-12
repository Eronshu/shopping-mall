import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from "./App";
import ItemDetails from "./ItemDetails";
import Login from "./Login";
import Register from "./Register";
import ShoppingCart from "./ShoppingCart";
import { getCartMock } from "./api";
import AdministratorPage from "./AdminReport";

function MainPage() {
    const [data, setData] = useState([]);

    // Fetch the cart data on component mount
    useEffect(() => {
        getCartMock().then((res) => {
            setData(res.data);
        });
    }, []);

    return (
        <Router>
            <div>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<App data={data} setData={setData} />}
                    ></Route>
                    <Route
                        path="/details/:id"
                        element={<ItemDetails data={data} setData={setData} />}
                    ></Route>
                    <Route
                        path="/shoppingCart"
                        element={<ShoppingCart data={data} setData={setData} />}
                    ></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                    <Route path="/adminReport" element={<AdministratorPage />}></Route>
                </Routes>
            </div>
        </Router>
    );
}

export default MainPage;
