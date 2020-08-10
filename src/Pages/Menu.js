import React, { Component } from 'react';
import { connect } from 'react-redux';

import Days from '../Components/menu/days';
import Details from '../Components/menu/details';

import './Menu.css';

class MenuPage extends Component {
    render() {
        return (
            <div className="menu-container">
                <div className="menu-header">
                    <h1>Menu Page</h1>
                </div>
                <div className="menu-body">
                    <Days />
                    {this.props.currentDay && <Details />}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currentDay: state.menu.currentDay
})

export default connect(mapStateToProps, null)(MenuPage)