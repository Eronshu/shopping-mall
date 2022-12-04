import './res/Item.css'
import {Link} from 'react-router-dom'
const Item = ({itemName, itemImg, itemContent, itemPrice}) =>{
    return <div className='item'>
        <Link to="/details">
            <div
                style={{background:`url('${itemImg}') no-repeat center center/cover fixed`,
                    width: `160px`,
                    height: `160px`,
                    margin: `10px 0 20px`}}></div>
            <p className='name'>{itemName}</p>
            <p className='content'>{itemContent}</p>
            <p className='item_price'>{itemPrice}</p>
        </Link>
    </div>
}
export default Item