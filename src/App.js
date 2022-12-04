import './ShoppingCart'
import './res/App.css';
import './components/Header';
import './Main'
import Footer from "./components/Footer";
import React from "react";
import Header from "./components/Header"
import Main from "./Main"
import SideBar from "./SideBar";
import ItemDetails from "./ItemDetails";

function App() {
    return (
        <>
            <Header/>
            <SideBar/>
            <div id="page">
                {/*<Category/>*/}
                <div id = "mainPage">
                    <Main/>
                </div>

            </div>
            <div className='footer'>
                <Footer/>
            </div>
        </>

    );
}

export default App;
