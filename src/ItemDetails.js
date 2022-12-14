import React, { useState, useEffect, Component } from 'react'
import { Row, Col, Radio, Button, message } from 'antd'
// #6caef9 #3b93f7
import './res/ItemDetail.css'
import { Link, useParams } from 'react-router-dom'
import {getItemByIdMock, getSpecificItem} from './api'
import CommentList from "./components/CommentList";
export default function ItemDetails(props) {
    const params = useParams()
    const [itemInfo, setItemInfo] = useState({
        image: '',
        name: '',
        desc: '',
        price: 0,
        id: null,
    })
    useEffect(() => {
        // getItemByIdMock(Number(params.id)).then(res => {
        //     setItemInfo(res)
        // })
        getSpecificItem(params.id).then(res => {
            console.log(res.data)
            setItemInfo(res.data.data)
        })
    }, [])
    function addToCart() {
        debugger
        props.setData([...props.data, { ...itemInfo }])
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
                        <Button type="primary" size="large" className='button' onClick={addToCart}>Add to Cart</Button>
                        <Link to="/">
                            <Button type="link" >Back to Home Page</Button>
                        </Link>
                    </div>
                </Col>
            </Row>
            <CommentList/>
        </div>
    );
}
