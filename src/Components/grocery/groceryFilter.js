import React, { Component } from 'react';

import './groceryFilter.css';

class GroceryFilter extends Component {

    render() {
        return (
            <div className="grocery-filter-container">
                <div className="grocery-filter-title">
                    <label for="grocery-filter">Search for grocery item:</label>
                </div>
                <div className="grocery-filter-search">
                    <input type="search" id="grocery-filter" onChange={this.props.updateFilter} />
                </div>
            </div>
        );
    }
}

export default GroceryFilter;