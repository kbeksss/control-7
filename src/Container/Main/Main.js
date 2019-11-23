import React, {Component} from 'react';
import Orders from "../../Components/Orders/Orders";
import Items from "../../Components/Items/Items";

import './Main.css';

import hamburgerImg from '../../assets/hamburger.jpg';
import coffeeImg from '../../assets/coffee.jpg';
import cheeseburgerImg from '../../assets/cheeseburger.jpg';
import teaImg from '../../assets/tea.jpg';
import friesImg from '../../assets/fries.jpg';
import cokeImg from '../../assets/cokeCup.jpg';



export const itemsArray = [
    {name: 'Hamburger', price: 80, image: hamburgerImg},
    {name: 'Coffee', price: 70, image: coffeeImg},
    {name: 'Cheeseburger', price: 90, image: cheeseburgerImg},
    {name: 'Tea', price: 50, image: teaImg},
    {name: 'Fries', price: 45, image: friesImg},
    {name: 'Coke', price: 40, image: cokeImg},
];
class Main extends Component{
    state = {
        orders: [

        ]
    };

    render() {
        return(
            <div className='Main'>
                <Orders/>
                <Items/>
            </div>
        )
    }
}

export default Main;