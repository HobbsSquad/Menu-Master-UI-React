import React, { Component } from 'react';

import Days from '../Components/menu/days';
import DayDetails from '../Components/menu/dayDetails';
import Navbar from '../Components/navbar';
import NewDayDialog from '../Components/menu/newDayDialog';

import './Menu.css';

class MenuPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showNewDayDialog: false
        }
    }

    render() {
        return (
            <div className="menu-container">
                <Navbar />
                <div className="menu-header">
                    <h1>Menus</h1>
                </div>
                <div className="menu-body">
                    <button className="new-day-button" onClick={() => this.setState({ showNewDayDialog: true })}>New Day</button>
                    <NewDayDialog cancel={() => this.setState({showNewDayDialog: false})} visible={this.state.showNewDayDialog} />
                    <Days />
                    <DayDetails />
                </div>
            </div>
        );
    }
}

export default MenuPage;