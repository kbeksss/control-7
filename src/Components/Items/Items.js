import React from 'react'

import './Items.css'

import {itemsArray} from "../../Container/Main/Main";
import Item from "./Item/Item";

const Items = props => {
    return(
        <div className='Items'>
            {itemsArray.map((item, index) => (
                <Item
                    click={() => props.add(index)}
                    key={index}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                />
            ))}
        </div>
    );
};

export default Items;