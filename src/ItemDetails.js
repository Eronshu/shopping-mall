import React , {Component} from 'react'
import { Row, Col, Radio, Button, message } from 'antd'
// #6caef9 #3b93f7
import './res/ItemDetail.css'
// redux
import { AddProduct } from './redux/actions'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

class ItemDetails extends Component {
    constructor(props){
        super(props)
        this.state = { }
        this.handleButtonClick = this.handleButtonClick.bind(this)
    }
    handleButtonClick(){
        let el = this.props.location.state
        let state = {
            ...el,
        }
        // 将物品添加进购物车
        this.props.AddProduct(state)
        // 提示购物车添加成功
        message.success("Add Success")
        // 跳转到商品展览页面
        this.props.history.push({ pathname: "/", state })
    }

    render() {
        console.log(this.props.location)
        const { name, image, desc, price } = this.props.state
        return (
            <div className="root">
                <Row className='container'>
                    <Col span={12} className='[all_height, left_page]'>
                        <img src={image} className='info_image'></img>
                    </Col>
                    <Col span={12} className='all_height'>
                        <h3 className='title'>{name}</h3>
                        <p className='desc'>{desc}</p>
                        <p className='price'>${price}</p>
                        <div className='total'>
                            {/*<p className='total_desc'>{name+" "+this.state.size+" "+this.state.color}</p>*/}
                            <h3 className='total_money'>{price}</h3>
                        </div>
                        <div className='buttonGrop'>
                            <Button type="primary" size="large" className='button' onClick={this.handleButtonClick}>Add to Cart</Button>
                           <Link to="/">
                            <Button type="link" >Back to Home Page</Button>
                           </Link>
                           </div>
                    </Col>
                </Row>
            </div>
        );
    }
}
function mapStateToProps(state){
    return {
        shopList: state.shopList
    }
}
function mapDispatchToProps(dispatch){
    return {
        AddProduct: (data) => dispatch(AddProduct(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails);