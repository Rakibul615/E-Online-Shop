import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import OrderDetail from '../OrderDetail/OrderDetail';
import useAuth from './../../hooks/useAuth';
import { useHistory } from 'react-router';
import './Orders.css'

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();
    const history = useHistory();
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('idToken')}`
            }
        })
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                }
                else if (res.status === 401) {
                    history.push('/login');
                }

            })
            .then(data => setOrders(data));
    }, [])

    return (
        <div id='order-title'>
            <h2>You have placed: {orders.length} Orders</h2>
            <hr />
            <ul>
                {orders.map(order => 
                 
                    <OrderDetail
                    key={order._id}
                    order={order}
                    ></OrderDetail>
                   
                 )}
            </ul>
        </div>
    );
};

export default Orders;