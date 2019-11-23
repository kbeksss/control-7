import React from 'react';
import './Order.css';
const Order = (props) => {
    return(
        <div className='Order'>
            <span className='name'>{props.name}   </span>
            <span>x {props.count}</span>
            <span> {props.price} KGS</span>
            <button onClick={props.remove}>x</button>
        </div>
    )
};

export default Order;