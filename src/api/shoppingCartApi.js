import axios from "axios";
const baseUrl = 'http://localhost:8080/EECS4413Project'
const token = localStorage.getItem('token');

//------------------------------------shoppingCartController-----------------------------------//
//SHOPPING CART:
// const shoppingCartItems = [
//     {item_id: 'XXX', quantity: 0},
//     {item_id: '051EZXVTANB1QGD4', quantity: 3},
//     {item_id: '0EIHD7I9TGLOSY6C', quantity: 5}
// ];

//用户登录后把购物车里的数据传进去，同步购物车
export function syncShoppingCart(shoppingCartItems) {
    return axios({
        url: `${baseUrl}/rest/cart`,
        method: 'post',
        data: shoppingCartItems,
        headers: {
            Authorization: token,
            'Content-Type': 'application/json'
        }
    });
}

// Update cart item
export function updateShoppingCartItem(itemId, quantity) {
    const formData = new FormData();
    formData.append('item_id', itemId);
    formData.append('quantity', quantity);

    return axios({
        url: `${baseUrl}/rest/cart`,
        method: 'put',
        data: formData,
        headers: {
            Authorization: token,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
}

// Delete cart item
export function deleteCartItem(itemId) {
    return axios({
        url: `${baseUrl}/rest/cart/${itemId}`,
        method: 'delete',
        headers: {
            'Authorization': token,
        },
    });
}

//get all cart items
export function getAllCartItems(itemId) {
    return axios({
        url: `${baseUrl}/rest/cart`,
        method: 'get',
        headers: {
            'Authorization': token,
        },
    });
}


//curl -X GET -H "Authorization: <TOKEN>" http://localhost:8080/EECS4413Project/rest/cart
export function getCart() {
    return axios({
        url: `${baseUrl}/cart`,
        method: 'get',
        // headers: {
        //     'Authorization': 'x-www-form-urlencoded'
        // }
    })
}

export function getCartMock() {
    return axios({
        url: `/cart.json`,
        method: 'get'
    })
}



