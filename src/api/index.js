import axios from 'axios'
const baseUrl = 'http://localhost:8080/EECS4413Project'

const token = localStorage.getItem('token');
//---------------UserController-----------------------//
// Login
export function login({ username, password }) {
    const formData = new URLSearchParams();
    formData.append('username', username);
    formData.append('password', password);
    return axios({
        url: `${baseUrl}/rest/user/sign-in`,
        method: 'post',
        data: formData,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}
//register
export function register({username,password}) {
    const formData = new URLSearchParams();
    formData.append('username', username);
    formData.append('password', password);
    return axios({
        url: `${baseUrl}/rest/user`,
        method: 'post',
        data: formData,
        s: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}

// Logout
export function logout() {
    return axios({
        url: `http://localhost:8080/EECS4413Project/rest/user/sign-out`,
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
    const data = new URLSearchParams();
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
    const data = new URLSearchParams();
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
    const data = new URLSearchParams();
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



