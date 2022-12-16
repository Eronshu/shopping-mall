import React, {useState, useEffect} from 'react';
import {getOrders} from "./api/adminReportApi";
import {getVisitEvents} from "./api/adminReportApi"
import {Button, message, Table} from "antd";


export function AdminReport() {
    const [data, setData] = useState([]);
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [data2, setData2] = useState([]);

    const [fromMonth, setFromMonth] = useState('');
    const [fromYear, setFromYear] = useState('');
    const [toMonth, setToMonth] = useState('');
    const [toYear, setToYear] = useState('');
    const [type, setType] = useState('');

    function getOrderReport() {
        getOrders(month, year)
            .then(res => {
                    setData(res.data.data)
                }
            ).catch(err => {
            message.error(err.response.msg)
        })
    }

    function getUsageVisitEvents() {
        getVisitEvents(fromMonth, fromYear, toMonth, toYear, type)
            .then((res) => {
                setData2(res.data.data);
            })
            .catch((err) => {
                message.error(err.response.msg)
            });
    }

    const columnsO = [
        {
            title: 'item_id',
            dataIndex: 'item_id',
        },
        {
            title: 'item_name',
            dataIndex: 'item_name',
        },
        {
            title: 'quantity',
            dataIndex: 'quantity',
        },
        {
            title: 'price',
            dataIndex: 'price',
        },
    ];
    const columnsV = [
        {
            title: 'Event Type',
            dataIndex: 'event_type',
        },
        {
            title: 'IP Address',
            dataIndex: 'ip_address',
        },
        {
            title: 'timestamp',
            dataIndex: 'timestamp',
        },
        {
            title: 'Data',
            dataIndex: 'data',
        },
    ];
    let VIEW_ITEM = "View Item";
    let CART_ITEM = "Cart Item";
    let PLACE_ORDER = "Place Order";
    let PAYMENT_RECEIVED = "Payment Received";
    return (
        <div>
            <h2>generate a report with the items sold each month</h2>
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
            <Button onClick={getOrderReport}>see report</Button>
            <Table
                columns={columnsO}
                dataSource={data}
                pagination={{pageSize: 10}}
            />

            <h2>generate a report with the items sold each month</h2>
            <label htmlFor="fromMonth">From Month:</label>
            <input
                id="fromMonth"
                type="number"
                value={fromMonth}
                onChange={e => setFromMonth(e.target.value)}
            />
            <label htmlFor="fromYear">From Year:</label>
            <input
                id="fromYear"
                type="number"
                value={fromYear}
                onChange={e => setFromYear(e.target.value)}
            />
            <br/>
            <label htmlFor="toMonth">To Month:</label>
            <input
                id="toMonth"
                type="number"
                value={toMonth}
                onChange={e => setToMonth(e.target.value)}
            />
            <label htmlFor="toYear">To Year:</label>
            <input
                id="toYear"
                type="number"
                value={toYear}
                onChange={e => setToYear(e.target.value)}
            />
            <label htmlFor="type">Type:</label>
            <select id="type" value={type} onChange={e => setType(e.target.value)}>
                <option value={VIEW_ITEM}>{VIEW_ITEM}</option>
                <option value={CART_ITEM}>{CART_ITEM}</option>
                <option value={PLACE_ORDER}>{PLACE_ORDER}</option>
                <option value={PAYMENT_RECEIVED}>{PAYMENT_RECEIVED}</option>
            </select>
            <Button onClick={getUsageVisitEvents}>see VisitEvents</Button>
            <Table
                columns={columnsV}
                dataSource={data2}
                pagination={{pageSize: 10}}
            />
        </div>
    );

}
