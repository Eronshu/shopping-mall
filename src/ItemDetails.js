import React, { useState, useEffect, Component } from "react";
import { Row, Col, Radio, Button, message } from "antd";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";

// #6caef9 #3b93f7
import "./res/ItemDetail.css";
import { Link, useParams } from "react-router-dom";
import { getItemByIdMock, getSpecificItem } from "./api";
import { getCommentMock, getReview, setReview } from "./api/reviewApi";
import { updateShoppingCartItem } from "./api/shoppingCartApi";

export default function ItemDetails(props) {
  const params = useParams();
  const [value, setValue] = useState(1);
  const [itemInfo, setItemInfo] = useState({
    image: "",
    name: "",
    desc: "",
    price: 0,
    id: null,
  });

  const [comment, setComment] = useState([]);
  const [rating, setRating] = useState(5);
  const [review, setUserReview] = useState("");

  useEffect(() => {
    getSpecificItem(params.id).then((res) => {
      setItemInfo(res.data.data);
    });
    getReview(params.id)
      .then((res) => {
        setComment(res.data.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  function addToCart() {
    // console.log(params.id)
    // // debugger
    const id = params.id;
    const existingIndex = props.data.findIndex(it=>it.item_id===params.id);
    let existingItem;
    let totalQuantity = value;
    if(existingIndex>0){
      existingItem = props.data[existingIndex];
      totalQuantity+=existingItem.quantity;
    }
    updateShoppingCartItem(id, totalQuantity)
      .then((res) => {
        console.log(res);
        if(existingIndex>=0){
          const newList = props.data
            .slice();
          newList.splice(existingIndex,1,{...existingItem, quantity: totalQuantity});
          props.setData(newList);
        }else{
          const newList = props.data.concat({...itemInfo, quantity: value});
          props.setData(newList);
        }
        debugger;
      })
      .catch((err) => {
        message.error("something wrong here");
      });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const id = params.id;

    setReview({ id, rating, review })
      .then((res) => {
        console.log("rating", rating);
        const newList = comment.concat({
          user_id: localStorage.getItem("user"),
          rating: rating,
          comment: review,
        });
        setComment(newList);
        debugger;
      })
      .catch((err) => {
        console.log("rating", rating);
        debugger;
      });
  }

  return (
    <div className="root">
      <Row className="container">
        <Col span={12} className="[all_height, left_page]">
          <img src={`https://eecs4413groupg.cf/images/${itemInfo.id}.jpg`} className="info_image"></img>
        </Col>
        <Col span={12} className="all_height">
          <h3 className="title">{itemInfo.name}</h3>
          <p className="desc">{itemInfo.description}</p>
          <p className="price">${itemInfo.price}</p>
          <div className="buttonGrop">
            <div>
              <button onClick={() => setValue(value + 1)}>+</button>
              <input type="number" value={value} min={1} readOnly />
              {/* 当value大于等于1时才能减少 */}
              <button onClick={() => value >= 1 && setValue(value - 1)}>
                -
              </button>
            </div>
            {props.isLogin && (
              <Button
                type="primary"
                size="large"
                className="button"
                onClick={addToCart}
              >
                Add to Cart
              </Button>
            )}
            {!props.isLogin && (
              <Link to="/login">
                <Button type="primary" size="large" className="button">
                  please login first to add the item
                </Button>
              </Link>
            )}

            <Link to="/">
              <Button type="link">Back to Home Page</Button>
            </Link>
          </div>
        </Col>
      </Row>
      <div className="review">
        <h3>Product review</h3>
        <form onSubmit={handleFormSubmit}>
          <label name="rating" className="rate">
            rate:
            <Rating
              name="simple-controlled"
              value={rating}
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
            />
          </label>
          <br />
          <label htmlFor="review-text">Let us know what you think：</label>
          <textarea
            id="review-text"
            name="review"
            className="text_review"
            value={review}
            onChange={(event) => {
              setUserReview(event.target.value);
            }}
          />
          <br />
          <Button
            type="primary"
            size="large"
            className="button"
            htmlType="submit"
          >
            submit
          </Button>
        </form>
        <br />
        <br />
        <br />
        <hr />
        {comment.filter((c=>c.comment)).map((commentObj, idx) => (
          <div key={idx} className="comment">
            <h4>User:{commentObj.user_id}</h4>
            <label>
              Rating:
              <Rating name="read-only" value={commentObj.rating} readOnly />
            </label>
            <p>comment:{commentObj.comment}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}
