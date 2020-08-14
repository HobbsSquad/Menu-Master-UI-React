import React, { Component } from 'react';

import './groceryItem.css';

class GroceryItem extends Component {

    displayDetails = () => {
        this.props.selectIngredient(this.props.ingredientData);
    }

    render() {
        const name = this.props.ingredientData.name;
        const size = this.props.ingredientData.size;

        return (
            <div className="grocery-item-container">
                <button className="grocery-item-button" onClick={this.displayDetails}>
                    <div className="grocery-item-button-name">{name}</div>
                    <div className="grocery-item-button-size">{size}</div>
                </button>
            </div>
        );
    }
}

export default GroceryItem;