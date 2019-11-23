import React from 'react';

import './Item.css';

const Item = (props) => {
    return(
        <div className='Item' onClick={props.click}>
            <img src={props.image} width='auto' height='40' alt="food"/>
            <div className='Info'>
                <div className='Name'>Name: {props.name}</div>
                <div className='Price'>Price: {props.price} KGS</div>
            </div>
        </div>
    )
};

export default Item;