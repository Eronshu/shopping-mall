import React from 'react'
import style from  "./res/ShoppingCart.css"
import {Link} from "react-router-dom";
import {Button, Table} from "antd";
import {CloseCircleFilled} from "@ant-design/icons";
class ShoppingCart extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            // 设置表格
            columns: [
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
                    render: (state) => (
                        <Button
                            type="primary"
                            onClick={() => this.onCloseClick(state)}
                        >
                            <CloseCircleFilled />删除
                        </Button>
                    )
                }
            ]
        }
        this.TotalMoney = this.TotalMoney.bind(this)
        this.buildTable = this.buildTable.bind(this)
    }
    TotalMoney(){
        let shopList = this.props.items
        let sum = 0
        for(let i=0;i<shopList.length;i++){
            sum += shopList[i].price
        }
        return sum
    }
    // 点击删除按钮时提示删除商品成功
    onCloseClick(state){
        this.TotalMoney()
        // 点击删除按钮之后删除相应的东西
        this.props.RemoveProduct(state)
        // 提示显示删除成功
        // message.success("商品删除成功")
    }
    // 创建表格
    buildTable(){
        let shopList = this.props.shopList
        // console.log(shopList)
        if(shopList.length){
            // 说明购物车里有东西
            const data = shopList.map((el, idx) => ({
                key: idx,
                image: el.image,
                longdesc: el.longdesc,
                number: 1,
                total: el.price,
                operation: el
            }))
            return (
                <Table className={style.table} dataSource={data} columns={this.state.columns}></Table>
            )
        }else{
            // 说明购物车里没有东西
            return (
                <p className={style.info}>你的购物车里没有东西233</p>
            )
        }
    }
    // 点击结算之后进行结算提示
    onSubmit(){
        // 结算提示
        // message.success("结算成功，花费了"+this.TotalMoney()+"元")
        // 清空购物车
        this.props.ClearProduct()
    }
    componentDidMount(){
        this.TotalMoney()
    }
    render(){
        return (
            <div className="CartRoot">
                <header className="header">
                    <h3 className="title">My Shopping Cart</h3>
                </header>
                <main className="container">
                    {this.buildTable()}
                </main>
                <footer className="CartFooter">
                    <Link to="/">Continue shopping</Link>
                    <p className="totalMoney">Total(Tax not include)：<span className="totalum">$1234</span></p>
                    <p className="submit" onClick={this.onSubmit}>Check Out</p>
                </footer>
            </div>
        )
    }
}
export default ShoppingCart