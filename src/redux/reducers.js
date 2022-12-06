// 引入初始数据
import initState from './state'

import { combineReducers } from 'redux'

// reducer实际上就是可变动的数据
// 定义想购物车添加商品的reducer
//(之前的状态，action)
function shopList(state=initState.shopList, action){
    switch(action.type){
        case "ADD_PRODUCT":
            state.push(action.data)
            return state
        case "REMOVE_PRODUCT":
            state = state.filter(el=>el.name !== action.data.name)
            return state
        case "CLEAR_PRODUCT":
            state = []
            return state
        default:
            return state
    }
}

// 导出reducers
export default combineReducers({
    shopList
})