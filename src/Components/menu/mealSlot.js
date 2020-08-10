import React, { Component } from 'react';

import Recipes from './recipes';

class MealSlot extends Component {

    render() {
        return (
            <div className="mealSlot-container">
                <h2>{this.props.slotData.name}</h2>
                <Recipes key={this.props.slotData.recipes._id} recipes={this.props.slotData.recipes}/>
            </div>
        );
    }
}

export default MealSlot;