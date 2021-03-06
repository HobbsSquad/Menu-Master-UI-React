import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../Redux/actions/auth'

import './navbar.css';

class Navbar extends Component {

    logoutHandler = () => {
        this.props.logout();
    }

    render() {
        return (
            <header className="navbar-container">
                <div className="navbar-logo">
                    <h1>Grocery Getter</h1>
                </div>
                <div className="navbar-items">
                    <ul>
                        <li><NavLink to="/menu">Menu</NavLink></li>
                        <li><NavLink to="/grocery">Grocery Items</NavLink></li>
                        <li><NavLink to="/recipe">Recipes</NavLink></li>
                        <li><NavLink to="/auth" onClick={this.logoutHandler}>Logout</NavLink></li>
                    </ul>
                </div>
            </header>
        );
    }
}

const mapDispatchToProps = {
    logout
}

export default connect(null, mapDispatchToProps)(Navbar);
