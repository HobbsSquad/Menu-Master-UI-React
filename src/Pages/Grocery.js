import React, { Component } from 'react';

import Navbar from '../Components/navbar';

class GroceryPage extends Component {
    render() {
        return (
            <div className="grocery-container">
                <Navbar/>
                <div className="grocery-header">
                    
                </div>
                <div className="grocery-body">
                    <p>Grocery items go here.</p>
                </div>
            </div>
        );
    }
}

export default GroceryPage;