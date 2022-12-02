import './res/Item.css'
const Item = ({itemName, itemImg, itemContent, itemPrice}) =>{
    return <div className='item'>
        <a href="##">
            <div
                style={{background:`url('${itemImg}') no-repeat center center/cover fixed`,
                    width: `160px`,
                    height: `160px`,
                    margin: `10px 0 20px`}}></div>
            <p className='name'>{itemName}</p>
            <p className='content'>{itemContent}</p>
            <p className='item_price'>{itemPrice}</p>
        </a>
    </div>
}
export default Item