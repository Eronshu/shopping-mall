import axios from "axios";
const baseUrl = 'http://localhost:8080/EECS4413Project'
const token = localStorage.getItem('token');
// Create order
export function getOrders(month, year) {
    const Data = new URLSearchParams();
    Data.append('month', month);
    Data.append('year', year);
    return axios({
        url: `${baseUrl}/rest/report/orders`,
        method: 'get',
        data:Data,
        headers: {
            'Authorization': token,
        },
    });
}

export function getVisitEvents(from_month, from_year,to_month,to_year,type) {
    const Data = new URLSearchParams();
    Data.append('from_month', from_month);
    Data.append('from_year', from_year);
    Data.append('to_month', to_month);
    Data.append('to_year', to_year);
    Data.append('type', type);
    return axios({
        url: `${baseUrl}/rest/report/usage`,
        method: 'get',
        data:Data,
        headers: {
            'Authorization': token,
        },
    });
}
