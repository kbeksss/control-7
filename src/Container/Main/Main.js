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
            {name: 'Hamburger', count: 0},
            {name: 'Coffee', count: 0},
            {name: 'Cheeseburger', count: 0},
            {name: 'Tea', count: 0},
            {name: 'Fries', count: 0},
            {name: 'Coke', count: 0},
        ]
    };
    add = (index) => {
        let orders = [...this.state.orders];
        let item = orders[index];
        item.count++;
        this.setState({orders});
    };
    remove = (index) => {
        let orders = [...this.state.orders];
        let item = orders[index];
        item.count--;
        this.setState({orders});
    };

    render() {
        let total = 0;
        this.state.orders.forEach((order, index) => {
            total += order.count * itemsArray[index].price;
        });
        return(
            <div className='Main'>
                <Orders
                    orders={this.state.orders}
                    remove={this.remove}
                    total={total}
                />
                <Items add={this.add}/>
            </div>
        )
    }
}

export default Main;