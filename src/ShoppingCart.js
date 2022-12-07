import React, { useState,useEffect } from 'react'
import "./res/ShoppingCart.css"
import { Link } from "react-router-dom";
import { Button, Table } from "antd";
import { CloseCircleFilled } from "@ant-design/icons";
export default function ShoppingCart(props) {
    const [totalPrice,setTotalPrice] = useState(0)
    const onCloseClick = (id) => {
        debugger
    }
    const onSubmit = () => {
        debugger
    }
    const colums = [
        {
            title: "image",
            dataIndex: "image",
            key: "image",
            render: image => (
                <img src={image} className={image}></img>
            )
        },
        {
            title: "amount",
            dataIndex: "number",
            key: "number"
        },
        {
            title: "subtotal",
            dataIndex: "total",
            key: "total"
        },
        {
            title: "move",
            dataIndex: "operation",
            key: "operation",
            render: (_, {id}) => (
                <Button
                    type="primary"
                    key={id}
                    onClick={() => onCloseClick(id)}
                >
                    <CloseCircleFilled key={id} />删除
                </Button>
            )
        }
    ]
    useEffect(() => {
        if (props.data.length > 0) {
            let sum = 0
            props.data.forEach(({price}) => {
                sum += price
            })
            debugger
            setTotalPrice(sum)
        }

    },[props.data])
    return (
        <div className="CartRoot">
            <header className="header">
                <h3 className="title">My Shopping Cart</h3>
            </header>
            <main className="container">
                {/*{this.buildTable()}*/}
                <Table className='table' dataSource={props.data} columns={colums}></Table>
                {props.data.length === 0 && <p key="none" className='info'>你的购物车里没有东西</p>}
            </main>
            <footer className="CartFooter">
                <Link to="/">Continue shopping</Link>
                <p className="totalMoney">Total(Tax not include)：<span className="totalum">${totalPrice}</span></p>
                <p className="submit" onClick={onSubmit}>Check Out</p>
            </footer>
        </div>
    )
}