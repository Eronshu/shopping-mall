import React, { useState, useEffect } from "react";
import "./res/ShoppingCart.css";
import { Link } from "react-router-dom";
import { Button, Table } from "antd";
import { CloseCircleFilled } from "@ant-design/icons";
import {deleteCartItem} from "./api/shoppingCartApi";

export default function ShoppingCart(props) {

    const onCloseClick = (id) => {
        console.log(props.data)
        console.log(id)
        debugger;
        deleteCartItem(id).then(res=>{
            console.log(res)
            debugger
        }).catch(err=>{
            console.log(err)
        })
    };

    // Columns to be displayed in the shopping cart table
    const columns = [
        {
            title: "item_id",
            dataIndex: "item_id",
            key: "item_id",
            render: (_,{item_id}) => <p>{item_id}</p>

        },
        {
            title: "quantity",
            dataIndex: "quantity",
            key: "number",
            render: (_,{quantity}) => <p>{quantity}</p>

        },
        {
            title: "remove",
            dataIndex: "operation",
            key: "operation",
            render: (_, { item_id }) => (
                <Button
                    type="primary"
                    key={item_id}
                    onClick={() => onCloseClick(item_id)}
                >
                    <CloseCircleFilled key={item_id} />
                    delete
                </Button>
            ),
        },
    ];

    // Update the total price whenever the data in the shopping cart changes
    // useEffect(() => {
    //     if (props.data.length > 0) {
    //         let sum = 0;
    //         props.data.forEach(({ price }) => {
    //             sum += price;
    //         });
    //         // Update the total price
    //         setTotalPrice(sum);
    //     }
    // }, [props.data]);

    return (
        <div className="CartRoot">
            <header className="header">
                <h3 className="title">My Shopping Cart</h3>
            </header>
            <main className="container">
                <Table className="table" dataSource={props.data} columns={columns}></Table>
                {props.data.length === 0 && (
                    <p key="none" className="info">
                        There is nothing in your shopping Cart
                    </p>
                )}
            </main>
            <footer className="CartFooter">
                <Link to="/">Continue shopping</Link>
                <p className="totalMoney">
                {/*    Total(Tax not include): <span className="totalum">${totalPrice}</span>*/}
                </p>
                <p className="submit" >
                    {props.isLogin && <Link style={{textDecoration: 'none'}} to = "/checkout">
                        Check Out
                    </Link>}
                    {!props.isLogin && <Link  to = "/login">
                        please login first
                    </Link>}
                </p>
            </footer>
        </div>
    );
}
