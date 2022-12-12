import axios from 'axios'
const baseUrl = 'http://localhost:8080/EECS4413Project'
const token = localStorage.getItem('token');
// Login
// curl -X POST http://localhost:8080/EECS4413Project/rest/users/sign-in  -d 'username=whc&password=ab2afbe27448b79c2d66950ec6a24c5e2efd13db28fc91684ffab8392995334d'
export function login({ username, password }) {
    // const params = new URLSearchParams();
    // params.append('username', username);
    // params.append('password', password);
    const forms = new FormData();
    forms.append('username', username);
    forms.append('password', password);
    console.log(forms)
    return axios({
        url: `${baseUrl}/rest/users/sign-in`,
        method: 'post',
        data: forms,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

export function register({ username, password }) {
    const forms = new FormData();
    forms.append('username', username);
    forms.append('password', password);
    console.log(forms)
    return axios({
        url: `${baseUrl}/rest/users`,
        method: 'post',
        data: forms,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

// export function logout({ username, password }) {
//     const params = new URLSearchParams();
//     params.append('username', username);
//     params.append('password', password);
//     return axios({
//         url: `${baseUrl}/rest/users`,
//         method: 'post',
//         data: params,
//         headers: {
//             'Content-Type': 'x-www-form-urlencoded',
//             'Authorization': token,
//         }
//     })
// }
// Logout
export function logout(token) {
    return axios({
        url: `${baseUrl}/rest/users/sign-out`,
        method: 'post',
        headers: {
            'Authorization': token,
        },
    });
}
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
        headers: {
            'Content-Type': 'x-www-form-urlencoded',
            // "Access-Control-Allow-Origin":"*"
        }
    });
}

// Get items of one page,所以说这是啥东西？
export function getItemsOfOnePage(page, count) {
    return axios({
        url: `${baseUrl}/rest/item?page=${page}&count=${count}`,
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

//SHOPPING CART:
// Update cart item
export function updateCartItem(itemId, quantity, token) {
    const params = new URLSearchParams();
    params.append('item_id', itemId);
    params.append('quantity', quantity);
    return axios({
        url: `${baseUrl}/rest/cart`,
        method: 'put',
        data: params,
        headers: {
            'Content-Type': 'x-www-form-urlencoded',
            'Authorization': token,
        },
    });
}

// Delete cart item
export function deleteCartItem(itemId, token) {
    return axios({
        url: `${baseUrl}/rest/cart/${itemId}`,
        method: 'delete',
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
export function getCommentMock() {
    return axios({
        url: `/comment.json`,
        method: 'get'
    })
}
//ADDRESS
export function addAddress({ street, province, country, zip, phone }) {
    const params = new URLSearchParams();
    params.append('street', street);
    params.append('province', province);
    params.append('country', country);
    params.append('zip', zip);
    params.append('phone', phone);
    return axios({
        url: `${baseUrl}/rest/address`,
        method: 'post',
        data: params,
        headers: {
            'Content-Type': 'x-www-form-urlencoded',
            'Authorization': token
        }
    })
}

export function updateAddress({ address_id, street, province, country, zip, phone }) {
    const params = new URLSearchParams();
    params.append('address_id', address_id);
    params.append('street', street);
    params.append('province', province);
    params.append('country', country);
    params.append('zip', zip);
    params.append('phone', phone);
    return axios({
        url: `${baseUrl}/rest/address`,
        method: 'put',
        data: params,
        headers: {
            'Content-Type': 'x-www-form-urlencoded',
            'Authorization': token
        }
    })
}

export function deleteAddress(address_id) {
    return axios({
        url: `${baseUrl}/rest/address/${address_id}`,
        method: 'delete',
        headers: {
            'Authorization': token
        }
    })
}

export function getAddress(address_id) {
    return axios({
        url: `${baseUrl}/rest/address/${address_id}`,
        method: 'get',
        headers: {
            'Authorization': token
        }
    })
}

export function getAddresses() {
    return axios({
        url: `${baseUrl}/rest/address`,
        method: 'get',
        headers: {
            'Authorization': token
        }
    })
}