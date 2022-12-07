import React, { useState, useEffect, Component } from 'react'
import { Row, Col, Radio, Button, message } from 'antd'
// #6caef9 #3b93f7
import './res/ItemDetail.css'
// redux
import { AddProduct } from './redux/actions'
import { connect } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getItemByIdMock } from './api'
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
        getItemByIdMock(Number(params.id)).then(res => {
            setItemInfo(res)
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
                    <img src={itemInfo.image} className='info_image'></img>
                </Col>
                <Col span={12} className='all_height'>
                    <h3 className='title'>{itemInfo.name}</h3>
                    <p className='desc'>{itemInfo.desc}</p>
                    <p className='price'>${itemInfo.price}</p>
                    <div className='buttonGrop'>
                        <Button type="primary" size="large" className='button' onClick={addToCart}>Add to Cart</Button>
                        <Link to="/">
                            <Button type="link" >Back to Home Page</Button>
                        </Link>
                    </div>
                </Col>
            </Row>
        </div>
    );
}
