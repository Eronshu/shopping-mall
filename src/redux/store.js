// 初始化store
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import shopListReducer from './reducers'

const store = createStore(shopListReducer, applyMiddleware(thunk))

export default store