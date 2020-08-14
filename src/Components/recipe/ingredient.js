import React, { Component } from 'react';

import './ingredient.css';

class Ingredient extends Component {
    render() {
        return (
            <div className="ingredient-container">
                <div className="ingredient-name">{this.props.ingredientData.name}</div>
                :&nbsp;
                <div className="ingredient-quantity">{this.props.ingredientData.quantity}</div>
            </div>
        );
    }
}

export default Ingredient;