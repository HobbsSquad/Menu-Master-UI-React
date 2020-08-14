import React, { Component } from 'react';

import './ingredientDetails.css';

class IngredientDetails extends Component {
    render() {
        if (this.props.selectedIngredient) {
            return (
                <div className="ingredient-details-container">
                    <div className="ingredient-details-header">
                        <h3>{this.props.selectedIngredient.name}</h3>
                        <h4>{this.props.selectedIngredient.size}</h4>
                    </div>
                    <div className="ingredient-details-body">
                        <h3>{this.props.selectedIngredient.description}</h3>
                        <a href={this.props.selectedIngredient.productLink} target="_blank" rel="noopener noreferrer"><img alt="ingredientImage" src={this.props.selectedIngredient.imageLink}/></a>
                    </div>
                </div>
            );
        } else {
            return (
                <h4>Click on a grocery item</h4>
            );
        }
    }
}

export default IngredientDetails;