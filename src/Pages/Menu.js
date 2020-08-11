import React, { Component } from 'react';

import Days from '../Components/menu/days';
import DayDetails from '../Components/menu/dayDetails';
import Navbar from '../Components/navbar';

import './Menu.css';

class MenuPage extends Component {
    render() {
        return (
            <div className="menu-container">
                <Navbar />
                <div className="menu-header">
                    <h1>Menus</h1>
                </div>
                <div className="menu-body">
                    <Days />
                    <DayDetails />
                </div>
            </div>
        );
    }
}

export default MenuPage;