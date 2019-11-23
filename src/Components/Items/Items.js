import React from 'react'

import './Items.css'

import {itemsArray} from "../../Container/Main/Main";
import Item from "./Item/Item";

const Items = () => {
    return(
        <div className='Items'>
            {itemsArray.map(item => (
                <Item
                    image={item.image}
                    name={item.name}
                    price={item.price}
                />
            ))}
        </div>
    );
};

export default Items;