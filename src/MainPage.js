import React, {useState,useEffect} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import style from './App.css'
// // components
// import Product from './pages/Product'
// import Infomation from './pages/Information'
// import ShopCart from './pages/ShopCart'
import App from "./App";
import ItemDetails from "./ItemDetails";
import Login from "./Login";
import Register from "./Register";
import ShoppingCart from "./ShoppingCart";
import { getCart } from './api'
function MainPage() {
    const [data, setData] = useState([])
    useEffect(() => {
        getCart().then(res => {
            setData(res.data)
        })
    },[])
    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path="/" element={<App data={data} setData={setData}/>}></Route>
                    {/*<Route path="/product" component={App}></Route>*/}
                    <Route path="/details/:id" element={<ItemDetails data={data} setData={setData}/>}></Route>
                    <Route path="/shoppingCart" element={<ShoppingCart data={data} setData={setData}/>}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/register" element={<Register/>}></Route>
                </Routes>
            </div>
        </Router>
    )
}
export default MainPage