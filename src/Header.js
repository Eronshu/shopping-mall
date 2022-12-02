import './res/Header.css'
const Header = () =>{
    return<div className='center'>
        <div className="shopcart">
            <a href="">Shopping Cart(0)</a>
        </div>
        <div>
            <ul className="login">
            <li>
                <a href="./login">Log In</a>
            </li>
            <li>
                <a href="./login">Register</a>
            </li>
        </ul>
        </div>
    </div>
}
export default Header