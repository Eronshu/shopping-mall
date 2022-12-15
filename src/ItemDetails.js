import React, {useState, useEffect, Component} from 'react'
import {Row, Col, Radio, Button, message} from 'antd'
// #6caef9 #3b93f7
import './res/ItemDetail.css'
import {Link, useParams} from 'react-router-dom'
import {getItemByIdMock, getSpecificItem} from './api'
import {getCommentMock, getReview, setReview} from "./api/reviewApi";
import {updateShoppingCartItem} from "./api/shoppingCartApi";

export default function ItemDetails(props) {
    const params = useParams()
    const [itemInfo, setItemInfo] = useState({
        image: '',
        name: '',
        desc: '',
        price: 0,
        id: null,
    })

    const [comment, setComment] = useState([])

    useEffect(() => {
        getSpecificItem(params.id).then(res => {
            console.log(res.data)
            setItemInfo(res.data.data)
        })
        getReview(params.id).then(res => {
            console.log(res)
            setComment(res.data.data)
        }).catch(err => {
            console.log(err.response.data)
        })
    }, [])

    function addToCart() {

        const id = params.id;
        updateShoppingCartItem({itemId:id,quantity:'1'}).then(res=>{
            console.log(res)
            debugger
        })
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        event.preventDefault();
        const form = event.target;
        const id = params.id;
        const rating = form.querySelector('[name="rating"]').value;
        const review = form.querySelector('[name="review"]').value;
        setReview({id, rating, review}).then(res => {
                console.log("rating", rating)
            debugger
            }
        ).catch(err=>{
            console.log("rating", rating)
            debugger
            }
        );
    }

    return (
        <div className="root">
            <Row className='container'>
                <Col span={12} className='[all_height, left_page]'>
                    <img
                        src={itemInfo.image}
                        className="info_image"

                    ></img>
                </Col>
                <Col span={12} className='all_height'>
                    <h3 className='title'>{itemInfo.name}</h3>
                    <p className='desc'>{itemInfo.description}</p>
                    <p className='price'>${itemInfo.price}</p>
                    <div className='buttonGrop'>
                        {props.isLogin && <Button type="primary" size="large" className='button' onClick={addToCart}>Add to Cart</Button>}
                        {!props.isLogin && <Link  to = "/login">
                            <Button type="primary" size="large" className='button'>please login first to add the item</Button>
                        </Link>}

                        <Link to="/">
                            <Button type="link">Back to Home Page</Button>
                        </Link>
                    </div>
                </Col>
            </Row>
            <div>
                <h3>Product review</h3>
                <form onSubmit={handleFormSubmit}>
                    <label name="rating">
                        rate:
                        <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </label>
                    <br/>
                    <label htmlFor="review-text">please enter your review：</label>
                    <textarea id="review-text" name="review"/>
                    <br/>
                    <button type="submit">submit</button>
                </form>
                <hr/>
                {comment.map((commentObj, idx) => (
                    <div key={idx}>
                        <h4>User:{commentObj.user_id}</h4>
                        <p>Rating: {commentObj.rating}</p>
                        <p>comment:{commentObj.comment}</p>
                    </div>
                ))
                }
            </div>
        </div>
    );
}
