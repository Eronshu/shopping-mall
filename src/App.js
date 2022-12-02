import './ShoppingCart'
import './res/App.css';
import './Header';
import './Category'
import Header from "./Header";
import Category from "./Category";
import Item from "./Item";
import Footer from "./Footer";
// import ShoppingCart from "./ShoppingCart";
function App() {
    return (
        <div>

            <Header />
            <Category />
            <div className='container'>
                <Item itemName={'Huawei 17xxxxxxxxxxxxx'} itemImg={''} itemContent={'It\'s just a test'} itemPrice={'$560'}/>
                <Item itemName={'Huawei 17xxxxxxxxxxxxx'} itemImg={''} itemContent={'It\'s just a test'} itemPrice={'$560'}/>
                <Item itemName={'Huawei 17xxxxxxxxxxxxx'} itemImg={''} itemContent={'It\'s just a test'} itemPrice={'$560'}/>
                <Item itemName={'Huawei 17xxxxxxxxxxxxx'} itemImg={''} itemContent={'It\'s just a test'} itemPrice={'$560'}/>
                <Item itemName={'Huawei 17xxxxxxxxxxxxx'} itemImg={''} itemContent={'It\'s just a test'} itemPrice={'$560'}/>
                <Item itemName={'Huawei 17xxxxxxxxxxxxx'} itemImg={''} itemContent={'It\'s just a test'} itemPrice={'$560'}/>
                <Item itemName={'Huawei 17xxxxxxxxxxxxx'} itemImg={''} itemContent={'It\'s just a test'} itemPrice={'$560'}/>
                <Item itemName={'Huawei 17xxxxxxxxxxxxx'} itemImg={''} itemContent={'It\'s just a test'} itemPrice={'$560'}/>
                <Item itemName={'Huawei 17xxxxxxxxxxxxx'} itemImg={''} itemContent={'It\'s just a test'} itemPrice={'$560'}/>
                <Item itemName={'Huawei 17xxxxxxxxxxxxx'} itemImg={''} itemContent={'It\'s just a test'} itemPrice={'$560'}/>
            </div>
            <div className='footer'>
                <Footer/>
            </div>
            {/*<BrowserRouter>*/}
            {/*<Route path='/ShoppingCart' component={ShoppingCart}/>*/}
            {/*</BrowserRouter>*/}
        </div>
    );
}

export default App;
