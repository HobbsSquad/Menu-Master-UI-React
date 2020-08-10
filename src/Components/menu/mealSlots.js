import React, { Component } from 'react';
import { connect } from 'react-redux';

import MealSlot from './mealSlot';

class MealSlots extends Component {

    render() {
        return (
            this.props.currentDay.mealSlots.map(slot => {
                return <MealSlot key={slot._id} slotData={slot}/>
            })
        );
    }
}

const mapStateToProps = state => ({
    currentDay: state.menu.currentDay
})

export default connect(mapStateToProps, null)(MealSlots)