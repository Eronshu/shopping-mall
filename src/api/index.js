import axios from 'axios'
const baseUrl = 'http://localhost:8080/EECS4413Project'
const token = localStorage.getItem('token');

//---------------UserController-----------------------//
// Login
// curl -X POST http://localhost:8080/EECS4413Project/rest/users/sign-in  -d 'username=whc&password=ab2afbe27448b79c2d66950ec6a24c5e2efd13db28fc91684ffab8392995334d'
export function login({ username, password }) {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    console.log(formData)
    return axios({
        url: `${baseUrl}/rest/user/sign-in`,
        method: 'post',
        data: formData,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}

export function register({username,password}) {
    // const formData = new URLSearchParams();
    // formData.append('username', username);
    // formData.append('password', password);
    // console.log(formData)
    return axios.post('http://localhost:8080/EECS4413Project/rest/user/sign-in', {
        username: username,
        password: password,
    })

}
// export function register(data) {
//     // const formData = new URLSearchParams();
//     // formData.append('username', username);
//     // formData.append('password', password);
//     console.log(data)
//     return axios({
//         url: `${baseUrl}/rest/user`,
//         method: 'post',
//         data: data,
//         headers: {
//             'Content-Type': 'multipart/form-data'
//         }
//     })
// }

// Logout
export function logout() {
    return axios({
        url: `${baseUrl}/rest/user/sign-out`,
        method: 'post',
        headers: {
            'Authorization': token,
        },
    });
}
//getRecoveryQuestion
export function getRecoveryQuestion(username) {
    const data = new URLSearchParams();
    data.append('username', username);
    return axios({
        url: `${baseUrl}/rest/user/recover`,
        method: 'get',
        data:data,
    });
}
//setRecoveryInfo
export function setRecoveryInfo(question,answer) {
    const data = new FormData();
    data.append('question', question);
    data.append('answer',answer)
    return axios({
        url: `${baseUrl}/rest/user/recover`,
        method: 'post',
        data:data,
        headers: {
            'Authorization': token,
        }
    });
}
//changePassword
export function changePassword(newPassword) {
    const data = new FormData();
    data.append('new_password', newPassword)
    return axios({
        url: `${baseUrl}/rest/user/change-password`,
        method: 'post',
        data:data,
        headers: {
            'Authorization': token,
        }
    });
}
//setRecoveryInfo
export function recoverPassword(username,answer,new_password) {
    const data = new FormData();
    data.append('username', username);
    data.append('answer',answer);
    data.append('new_password',new_password)
    return axios({
        url: `${baseUrl}/rest/user/recover-password`,
        method: 'post',
        data:data,
        headers: {
            'Authorization': token,
        }
    });
}

//-------------------itemController---------------------------//
//ITEMS API:
export function getItems({type, keyword}) {
    debugger
    return axios({
        url: `${baseUrl}/item`,
        method: 'get'
    })
}

// Get all items
export function getAllItems() {
    return axios({
        url: `${baseUrl}/rest/item`,
        method: 'get',

    });
}

// Search item by keyword
export function searchItemByKeyword(keyword) {
    return axios({
        url: `${baseUrl}/rest/item?keyword=${keyword}`,
        method: 'get',
    });
}
export function searchItemByBrand(brand) {
    return axios({
        url: `${baseUrl}/rest/item?brand=${brand}`,
        method: 'get',
    });
}
export function searchItemByType(type) {
    return axios({
        url: `${baseUrl}/rest/item?type=${type}`,
        method: 'get',
    });
}
// Get all item types
export function getAllItemTypes() {
    return axios({
        url: `${baseUrl}/rest/item/types`,
        method: 'get',
    });
}

// Get all item brands
export function getAllItemBrands() {
    return axios({
        url: `${baseUrl}/rest/item/brands`,
        method: 'get',
    });
}
export function getSpecificItem(itemId) {
    return axios({
        url: `${baseUrl}/rest/item/${itemId}`,
        method: 'get',
    });
}

export function getItemsMock() {
    return axios({
        url: `/list.json`,
        method: 'get'
    })
}

export function getItemByIdMock(id) {
    return new Promise((resolve,reject) => {
        axios({
            url: `/list.json`,
            method: 'get'
        }).then(res => {
            const list = res.data
            list.forEach(item => {
                if (item.id === id) {
                    resolve(item)
                }
            })            
        })
    })
}
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

// Get all orders
export function getOrders(token) {
    return axios({
        url: `${baseUrl}/rest/orders`,
        method: 'get',
        headers: {
            'Authorization': token,
        },
    });
}

// Get order by id
export function getOrderById(orderId, token) {
    return axios({
        url: `${baseUrl}/rest/orders/${orderId}`,
        method: 'get',
        headers: {
            'Authorization': token,
        },
    });
}
// Create order
export function createOrder(token) {
    return axios({
        url: `${baseUrl}/rest/orders`,
        method: 'post',
        headers: {
            'Authorization': token,
        },
    });
}

// Delete order
export function deleteOrder(orderId, token) {
    return axios({
        url: `${baseUrl}/rest/orders/${orderId}`,
        method: 'delete',
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


