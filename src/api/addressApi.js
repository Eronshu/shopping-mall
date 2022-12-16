import axios from "axios";
const baseUrl = 'http://localhost:8080/EECS4413Project'

export async function addAddress({ street, province, country, zip, phone }) {
    const token = localStorage.getItem('token');

    const params = new URLSearchParams();
    params.append('street', street);
    params.append('province', province);
    params.append('country', country);
    params.append('zip', zip);
    params.append('phone', phone);
    const res = await axios({
        url: `${baseUrl}/rest/address`,
        method: 'post',
        data: params,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            'Authorization': token
        }
    });
    return res.data.data.address_id;
}

export function updateAddress({ address_id, street, province, country, zip, phone }) {
    const token = localStorage.getItem('token');

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

export function getAddressById(address_id) {
    const token = localStorage.getItem('token');

    return axios({
        url: `${baseUrl}/rest/address/${address_id}`,
        method: 'get',
        headers: {
            'Authorization': token
        }
    })
}

export function getAllAddressesFromUser(){
    const token = localStorage.getItem('token');

    return axios({
        url: `${baseUrl}/rest/address`,
        method: 'get',
        headers: {
            'Authorization': token
        }
    })
}