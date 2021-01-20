import React, { Component } from 'react';

import Recipes from './recipes';
import UpdateMealDialog from './updateMealDialog';

import './mealSlot.css';

class MealSlot extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showUpdateMealDialog: false
        }
    }

    render() {
        return (
            <div className="meal-slot-container">
                <div className="meal-slot-header">
                    <h2>{this.props.slotData.name}</h2>
                    <button onClick={e => this.setState({ showUpdateMealDialog: true })}>Edit</button>
                    <UpdateMealDialog mealSlot={this.props.slotData} cancel={() => this.setState({ showUpdateMealDialog: false })} visible={this.state.showUpdateMealDialog} />
                </div>
                <Recipes recipes={this.props.slotData.recipes} />
            </div>
        );
    }
}

export default MealSlot;