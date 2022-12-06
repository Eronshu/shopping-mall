import './ShoppingCart'
import './res/App.css';
import './components/Header';
import './Main'
import Footer from "./components/Footer";
import React from "react";
import Header from "./components/Header"
import SideBar from "./SideBar";
import {connect} from "react-redux";
import Item from "./Item";
import initState from "./redux/state";
import {Pagination} from "antd";

class App extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {list: []}
        this.state = {
            list: [],
            page: 1
        }
        this.onProductCardClick = this.onProductCardClick.bind(this)
        this.onPageChange = this.onPageChange.bind(this)
    }

    //initialize
    saveItems = (items) => {
        this.setState({items})
    }

    componentDidMount() {
        this.setState({list: initState.list})
    }

    onPageChange(page) {
        this.setState({page})
    }

    onProductCardClick(itemObj) {
        console.log(itemObj)
        this.props.history.push({pathname: "/details"},{state: itemObj})

    }

    render() {
        let shopList = this.props.shopList
        let {list, page} = this.state
        let startIdx = (page - 1) * 10, endIdx = page * 10
        return (
            <>
                <Header/>
                <div className='main'>
                    <SideBar saveItems={this.saveItems}/>
                    <div className='container'>
                        {list.slice(startIdx, endIdx).map((itemObj, idx) => (
                            <Item itemName={itemObj.name}
                                  itemImg={itemObj.image}
                                  itemContent={itemObj.desc}
                                  itemPrice={itemObj.price}
                                  onClick={() => {this.onProductCardClick(itemObj)}}
                                  key={"item_" + idx}
                            />
                        ))
                        }
                    </div>
                </div>
                <footer className={page}>
                    <Pagination
                        defaultCurrent={1}
                        current={page}
                        total={list.length}
                        onChange={this.onPageChange}
                    ></Pagination>
                </footer>

                <div className='footer'>

                    <Footer/>
                </div>
            </>

        );

    }
}

function mapStateToProps(state) {
    return {
        shopList: state.shopList
    }
}

export default connect(mapStateToProps)(App)