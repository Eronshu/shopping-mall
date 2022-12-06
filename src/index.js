import React, { Component } from 'react'
import ReactDOM from 'react-dom/client';
import App from "./App";
import ShoppingCart from "./ShoppingCart";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Error from "./components/Error"
import Login from "./Login"
import Register from "./Register"
import './res/index.css'
import ItemDetails from "./ItemDetails";
import {Provider} from "react-redux";
import store from "./redux/store";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/shoppingCart",
        element: <ShoppingCart />,
        errorElement: <Error />,
    },
    {
        path: "/login",
        element: <Login />,
        errorElement: <Error />,
    },

    {
        path: "/register",
        element: <Register />,
        errorElement: <Error />,
    },
    {
        path: "/details",
        element: <ItemDetails />,
        errorElement: <Error />,
    },


]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <React.StrictMode>
            <Provider store={store}>
            <RouterProvider router={router} />
            </Provider>
        </React.StrictMode>
);