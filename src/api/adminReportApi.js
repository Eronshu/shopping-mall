import axios from "axios";
import {baseUrl} from "./constants"
// Create order
export function getOrders(month, year) {
    const token = localStorage.getItem('token');

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
    const token = localStorage.getItem('token');

    return axios({
        url: `${baseUrl}/rest/report/usage?from_month=${from_month}&from_year=${from_year}&to_month=${to_month}&to_year=${to_year}&type=${type}`,
        method: 'get',
        // data:Data,
        headers: {
            'Authorization': token,
        },
    });
}
