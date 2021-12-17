import React from 'react';


const OrderDetail = (props) => {
    const { name, email, address,city } = props.order;
    return (
        <div>
            
            <h3>Name:  {name}</h3>
            <h3>Email: {email}</h3>
            <h3>City:  {address}</h3>
            <h3>State: {city}</h3>
            <br />
           
            
        </div>
    );
};

export default OrderDetail;