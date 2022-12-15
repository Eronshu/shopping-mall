import axios from "axios";
const baseUrl = 'http://localhost:8080/EECS4413Project'
const token = localStorage.getItem('token');

// Create order
export function createOrder(firstName, lastName, addressID) {
    const formData = new URLSearchParams();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('addressID', addressID);
    return axios({
        url: `${baseUrl}/rest/order`,
        method: 'post',
        data:formData,
        headers: {
            'Authorization': token,
        },
    });
}

// Get all orders
export function getOrders() {
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
    return axios({
        url: `${baseUrl}/rest/orders/${orderId}`,
        method: 'delete',
        headers: {
            'Authorization': token,
        },
    });
}

//processPayment
export function processPayment(orderId,cardNumber,valid_my,cvv) {
    const formData = new URLSearchParams();
    formData.append('orderId', orderId);
    formData.append('card', cardNumber);
    formData.append('valid_my', valid_my);
    formData.append('cvv', cvv);
    return axios({
        url: `${baseUrl}/rest/orders/pay`,
        method: 'post',
        data:formData,
        headers: {
            'Authorization': token,
        },
    });
}