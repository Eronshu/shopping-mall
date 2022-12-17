import React, { useState, useEffect } from "react";
import "./res/ShoppingCart.css";
import { Link, useNavigate } from "react-router-dom";
import { Button, Table } from "antd";
import { CloseCircleFilled } from "@ant-design/icons";
import { deleteCartItem } from "./api/shoppingCartApi";

export default function ShoppingCart(props) {
  const navigate = useNavigate();
  // State to store the total price of the items in the shopping cart
  const [totalPrice, setTotalPrice] = useState(0);
  // Function to handle the closing of an item in the shopping cart
  const onCloseClick = (item_id) => {
    if(props.isLogin){
    deleteCartItem(item_id)
      .then((res) => {
        const newCart = props.data.filter(it=>it.item_id!==item_id);
        props.setData(newCart);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    }else{
      const newCart = props.data.filter(it=>it.item_id!==item_id);
      props.setData(newCart);
    }
  };

  // Columns to be displayed in the shopping cart table
  const columns = [
    {
      title: "Image",
      dataIndex: "item_id",
      key: "item_id",
      render: (image) => (
        <img
          alt={image}
          src={`https://eecs4413groupg.cf/images/${image}.jpg`}
          className={image}
          style={{
            width: 100,
          }}
        ></img>
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "number",
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
  useEffect(() => {
    if (props.data.length > 0) {
      let sum = 0;
      props.data.forEach(({ price, quantity }) => {
        sum += price * quantity;
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
        <Table
          className="table"
          dataSource={props.data}
          columns={columns}
        ></Table>
        {props.data.length === 0 && (
          <p key="none" className="info">
            There is nothing in your shopping Cart
          </p>
        )}
      </main>
      <footer className="CartFooter">
        <Link to="/">Continue shopping</Link>
        <p className="totalMoney">
          Total(Tax not included):{" "}
          <span className="totalum">${totalPrice}</span>
        </p>
        <Button
          type="primary"
          size="large"
          onClick={() => navigate(props.isLogin ? "/checkout" : "/login")}
          height
        >
          {props.isLogin ? "Check Out" : "Please login to checkout"}
        </Button>
      </footer>
    </div>
  );
}
