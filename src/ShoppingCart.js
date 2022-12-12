import React, { useState, useEffect } from "react";
import "./res/ShoppingCart.css";
import { Link } from "react-router-dom";
import { Button, Table } from "antd";
import { CloseCircleFilled } from "@ant-design/icons";

export default function ShoppingCart(props) {
    // State to store the total price of the items in the shopping cart
    const [totalPrice, setTotalPrice] = useState(0);

    // Function to handle the closing of an item in the shopping cart
    const onCloseClick = (id) => {
        // TODO: Implement this function
        debugger;
    };

    // Function to handle submitting the shopping cart
    const onSubmit = () => {
        // TODO: Implement this function
        debugger;
    };

    // Columns to be displayed in the shopping cart table
    const columns = [
        {
            title: "image",
            dataIndex: "image",
            key: "image",
            render: (image) => <img src={image} className={image} style={{
                width: 100,
            }}></img>,
        },
        {
            title: "amount",
            dataIndex: "number",
            key: "number",
        },
        {
            title: "subtotal",
            dataIndex: "total",
            key: "total",
        },
        {
            title: "remove",
            dataIndex: "operation",
            key: "operation",
            render: (_, { id }) => (
                <Button
                    type="primary"
                    key={id}
                    onClick={() => onCloseClick(id)}
                >
                    <CloseCircleFilled key={id} />
                    delete
                </Button>
            ),
        },
    ];

    // Update the total price whenever the data in the shopping cart changes
    useEffect(() => {
        if (props.data.length > 0) {
            let sum = 0;
            props.data.forEach(({ price }) => {
                sum += price;
            });
            // Update the total price
            setTotalPrice(sum);
        }
    }, [props.data]);

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
                    Total(Tax not include): <span className="totalum">${totalPrice}</span>
                </p>
                <p className="submit" onClick={onSubmit}>
                    {/*<link to = "/checkout">*/}
                        Check Out
                    {/*</link>*/}
                </p>
            </footer>
        </div>
    );
}
