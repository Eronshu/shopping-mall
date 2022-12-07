import React from 'react'
import ReactDOM from 'react-dom/client';
// import './res/index.css'
import {Provider} from "react-redux";
import store from "./redux/store";
import MainPage from "./MainPage";
import CssBaseline from '@mui/material/CssBaseline';
// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <App />,
//     },
//     {
//         path: "/shoppingCart",
//         element: <ShoppingCart />,
//         errorElement: <Error />,
//     },
//     {
//         path: "/login",
//         element: <Login />,
//         errorElement: <Error />,
//     },
//
//     {
//         path: "/register",
//         element: <Register />,
//         errorElement: <Error />,
//     },
//     {
//         path: "/details",
//         element: <ItemDetails />,
//         errorElement: <Error />,
//     },
//
//
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <Provider store={store}>
        {/*<RouterProvider router={router} />*/}
        <MainPage/>
        <CssBaseline/>
    </Provider>
    // </Router>
    // </React.StrictMode>
);