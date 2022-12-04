import React , {Component} from 'react'
import { Row, Col, Radio, Button, message } from 'antd'
// #6caef9 #3b93f7
import style from './res/ItemDetail.css'
// actions
import { AddProduct } from './actions/actions'
// connent
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
class ItemDetails extends Component {
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
        return (
            <div className={style.root}>
                <Row className={style.container}>
                    <Col span={12} className={[style.all_height, style.left_page]}>
                        {/*<img src={itemImg} className={style.info_image}></img>*/}
                    </Col>
                    <Col span={12} className={style.all_height}>
                        {/*<h3 className={style.title}>{itemName}</h3>*/}
                        {/*<p className={style.desc}>{itemContent}</p>*/}
                        {/*<p className={style.price}>${itemPrice}</p>*/}
                        {/*<div className={style.total}>*/}
                        {/*    <p className={style.total_desc}>{name+" "+this.state.size+" "+this.state.color}</p>*/}
                        {/*    <h3 className={style.total_money}>{price}</h3>*/}
                        {/*</div>*/}
                        <div className={style.buttonGrop}>
                            <Button type="primary" size="large" className={style.button} onClick={this.handleButtonClick}>Add to Cart</Button>
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

export default ItemDetails;