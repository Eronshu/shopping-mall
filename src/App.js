import "./ShoppingCart";
import "./res/App.css";
import "./components/Header";
import "./Main";
import Footer from "./components/Footer";
import React from "react";
import SideBar from "./SideBar";
import Item from "./Item";
import { Pagination } from "antd";
import { Link } from "react-router-dom";
import { getAllItems, getItems, getItemsMock } from "./api";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function App(props) {
    // const [shopList, setShopList] = useState([]);
    const [list, setList] = useState([]);
    const [page, setPage] = useState(1);
    const pageSize = 12;
    const navigate = useNavigate();
    const jumpToItem = (id) => {
        console.log(`/details/${id}`);
        debugger;
        navigate(`/details/${id}`);
    };
    useEffect(() => {
        getAllItems().then((res) => {
            setList(res.data.data);
        });
    }, []);
    return (
        <>
            <div className="center">
                <div className="shopcart">
                    <Link to="/shoppingCart">
                        Shopping Cart({props.data.length})
                    </Link>
                </div>
                <div>
                    <ul className="login">
                        <li>
                            <Link to="/login">Log In</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="main">
                <SideBar setData={props.setData} setList={setList} />
                <div className="container">
                    {list
                        .slice(page * pageSize - pageSize, page * pageSize)
                        .map((itemObj, idx) => (
                            <Link to={`/details/${itemObj.id}`} key={itemObj.id}>
                                <Item
                                    itemName={itemObj.name}
                                    itemImg={itemObj.image}
                                    itemPrice={itemObj.price}
                                />
                            </Link>
                        ))}
                </div>
            </div>
            <footer className={page}>
                <Pagination
                    defaultCurrent={1}
                    current={page}
                    total={list.length}
                    onChange={(newPage) => setPage(newPage)}
                ></Pagination>
            </footer>
            {/*<CommentList />*/}
            <div className="footer">
                <Footer />
            </div>
        </>
    );
}
