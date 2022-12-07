import axios from 'axios'
const baseUrl = 'http://localhost:8080/EECS4413Project/rest'
export function login({ username, password }) {
    const params = new URLSearchParams();
    params.append('username', username);
    params.append('password', password);
    return axios({
        url: `${baseUrl}/rest/users/sign-in`,
        method: 'post',
        data: params,
        headers: {
            'Content-Type': 'x-www-form-urlencoded'
        }
    })
}


//curl -X POST http://localhost:8080/EECS4413Project/rest/users  -d 'username=whc&password=ab2afbe27448b79c2d66950ec6a24c5e2efd13db28fc91684ffab8392995334d'
export function register({ username, password }) {
    const params = new URLSearchParams();
    params.append('username', username);
    params.append('password', password);
    return axios({
        url: `${baseUrl}/rest/users`,
        method: 'post',
        data: params,
        headers: {
            'Content-Type': 'x-www-form-urlencoded'
        }
    })
}

export function logout({ username, password }) {
    const params = new URLSearchParams();
    params.append('username', username);
    params.append('password', password);
    return axios({
        url: `${baseUrl}/rest/users`,
        method: 'post',
        data: params,
        headers: {
            'Content-Type': 'x-www-form-urlencoded'
        }
    })
}
//curl -X POST http://localhost:8080/EECS4413Project/rest/users/sign-out  -d 'username=whc&password=ab2afbe27448b79c2d66950ec6a24c5e2efd13db28fc91684ffab8392995334d'

export function getItems({type, keyword}) {
    debugger
    return axios({
        url: `${baseUrl}/items`,
        method: 'get'
    })
}

export function getItemsMock() {
    return axios({
        url: `/list.json`,
        method: 'get'
    })
}

export function getItemById(id) {
    return axios({
        url: `${baseUrl}/items/${id}`,
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

export function getCart() {
    return axios({
        url: `/cart.json`,
        method: 'get'
    })
}