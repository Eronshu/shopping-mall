import axios from "axios";
import {baseUrl} from "./constants"

// Create order
export async function createOrder(firstName, lastName, addressID) {
    const token = localStorage.getItem('token');

    const formData = new URLSearchParams();
    formData.append('first_name', firstName);
    formData.append('last_name', lastName);
    formData.append('address_id', addressID);
    const res = await axios({
        url: `${baseUrl}/rest/order`,
        method: 'post',
        data:formData,
        headers: {
            'Authorization': token,
            "Content-Type": "application/x-www-form-urlencoded",
        },
    });
    return res.data.data.order_id;
}

// Get all orders
export function getOrders() {
    const token = localStorage.getItem('token');

    return axios({
        url: `${baseUrl}/rest/orders`,
        method: 'get',
        headers: {
            'Authorization': token,
        },
    });
}

// Get order by id
export function getOrderById(orderId) {
    const token = localStorage.getItem('token');

    return axios({
        url: `${baseUrl}/rest/orders/${orderId}`,
        method: 'get',
        headers: {
            'Authorization': token,
        },
    });
}

//get all orders by user
// Get order by id
export function getAllOrders() {
    const token = localStorage.getItem('token');

    return axios({
        url: `${baseUrl}/rest/orders`,
        method: 'get',
        headers: {
            'Authorization': token,
        },
    });
}

// cancel order
export function cancelOrder(orderId) {
    const token = localStorage.getItem('token');

    return axios({
        url: `${baseUrl}/rest/orders/${orderId}`,
        method: 'delete',
        headers: {
            'Authorization': token,
            "Content-Type": "application/x-www-form-urlencoded",
        },
    });
}

//processPayment
export function processPayment(orderId,cardNumber,valid_my,cvv) {
    const token = localStorage.getItem('token');

    const formData = new URLSearchParams();
    formData.append('order_id', orderId);
    formData.append('card', cardNumber);
    formData.append('valid_my', valid_my);
    formData.append('cvv', cvv);
    return axios({
        url: `${baseUrl}/rest/order/pay`,
        method: 'post',
        data:formData,
        headers: {
            'Authorization': token,
            "Content-Type": "application/x-www-form-urlencoded",
        },
    });
}