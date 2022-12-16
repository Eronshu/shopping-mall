import axios from "axios";
const baseUrl = 'http://localhost:8080/EECS4413Project'
const token = localStorage.getItem('token');
// Create order
export function getOrders(month, year) {
    const Data = new URLSearchParams();
    Data.append('month', month);
    Data.append('year', year);
    return axios({
        url: `${baseUrl}/rest/report/orders?month=${month}&year=${year}`,
        method: 'get',
        // data:Data,
        headers: {
            'Authorization': token,
        },
    });
}

export function getVisitEvents(from_month, from_year,to_month,to_year,type) {
    return axios({
        url: `${baseUrl}/rest/report/usage?from_month=${from_month}&from_year=${from_year}&to_month=${to_month}&to_year=${to_year}&type=${type}`,
        method: 'get',
        // data:Data,
        headers: {
            'Authorization': token,
        },
    });
}
