import React, { useState, useEffect } from 'react';
import {getOrders} from "./api/adminReportApi";

export function AdminReport() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    function getOrderReport(){
        getOrders({month,year}).then(res=>{
                console.log(data);
                debugger
                setData(res.data)
            }
        ).catch(err => [
            setError(err)
        ])
        if (error) {
            return <p>An error occurred: {error.message}</p>;
        }
    }
    return (
        <div>
            <label htmlFor="month">Month:</label>
            <input
                id="month"
                type="number"
                value={month}
                onChange={e => setMonth(e.target.value)}
            />
            <label htmlFor="year">Year:</label>
            <input
                id="year"
                type="number"
                value={year}
                onChange={e => setYear(e.target.value)}
            />
            <button onClick={getOrderReport}></button>
        <table>
            <thead>
            <tr>
                <th>Item ID</th>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
            {data.map(item => (
                <tr key={item.item_id}>
                    <td>{item.item_id}</td>
                    <td>{item.item_name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );

}
