import './res/Item.css'
// import { Link } from 'react-router-dom'
const Item = ({ itemName, itemImg, itemContent, itemPrice, itemID }) => {
    return <div className='item'>
        <img alt={itemImg} src={`https://eecs4413groupg.cf/images/${itemID}.jpg`} className='card_image'></img>
        <p className='name'>{itemName}</p>
        {/*<p className='content'>{itemContent}</p>*/}
        <p className='item_price'>{itemPrice}</p>
    </div>
}
export default Item
