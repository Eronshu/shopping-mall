import axios from "axios";
const baseUrl = 'http://localhost:8080/EECS4413Project'
const token = localStorage.getItem('token');

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

export function getAddressById(address_id) {
    return axios({
        url: `${baseUrl}/rest/address/${address_id}`,
        method: 'get',
        headers: {
            'Authorization': token
        }
    })
}

export function getAllAddressesFromUser(){
    return axios({
        url: `${baseUrl}/rest/address`,
        method: 'get',
        headers: {
            'Authorization': token
        }
    })
}