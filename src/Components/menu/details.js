import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import MealSlots from './mealSlots';

import './details.css';

class Details extends Component {

    render() {
        const dotw = moment(this.props.currentDay.date).format("dddd");
        const date = moment(this.props.currentDay.date).format("MM[/]DD[/]YYYY");

        return (
            <div className="details-container">
                <div className="details-header">
                    <div className="details-header-dotw">{dotw}</div>
                    <div className="details-header-date">{date}</div>
                </div>
                <div className="details-body">
                    <MealSlots/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currentDay: state.menu.currentDay
})

export default connect(mapStateToProps, null)(Details)