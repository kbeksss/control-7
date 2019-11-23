import React from 'react'

import './Orders.css'
import Order from "./Order/Order";
import {itemsArray} from "../../Container/Main/Main";

const Orders = (props) => {
    let orders = props.orders.map((order, index) => {
        let something = [];
        if(order.count >= 1){
            something.push(<Order
                key={index}
                name={order.name}
                count={order.count}
                price={itemsArray[index].price * order.count}
                remove={() => props.remove(index)}
            />)
        }
        return something;
    });

    return(
        <div className='Orders'>
            {orders}
            <div className='Total'>
                Total price:   {props.total} KGS
            </div>

        </div>
    );
};

export default Orders;