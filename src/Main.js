import React from 'react'
import {Link,BrowserRouter} from 'react-router-dom'
import './res/Header.css'
import ShoppingCart from "./ShoppingCart";
import Item from "./Item";
const Main = () =>{
    return
    <div className='container'>
        <Item itemName={'Huawei 17xxxxxxxxxxxxx'} itemImg={''} itemContent={'It\'s just a test'}
              itemPrice={'$560'}/>
    </div>
}
export default Main