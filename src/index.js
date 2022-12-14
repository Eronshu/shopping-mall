import React from 'react'
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import MainPage from "./MainPage";
import CssBaseline from '@mui/material/CssBaseline';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <MainPage/>
        <CssBaseline/>
    </>
);