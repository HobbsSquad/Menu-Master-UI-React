import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import UpdateDayDialog from './updateDayDialog';
import MealSlots from './mealSlots';

import './dayDetails.css';

class DayDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showUpdateDayDialog: false
        }
    }

    render() {
        if (this.props.currentDay) {
            const dotw = moment(this.props.currentDay.date).format("dddd");
            const date = moment(this.props.currentDay.date).format("MM[/]DD[/]YYYY");

            return (
                <div className="day-details-container">
                    <div className="day-details-header">
                        <div className="name-and-date">
                            <div className="day-details-header-dotw">{dotw}</div>
                            <div className="day-details-header-date">{date}</div>
                        </div>
                        <button onClick={e => this.setState({ showUpdateDayDialog: true })}>Edit</button>
                        <UpdateDayDialog cancel={() => this.setState({ showUpdateDayDialog: false })} visible={this.state.showUpdateDayDialog} />
                    </div>
                    <div className="day-details-body">
                        <MealSlots />
                    </div>
                </div>
            );
        } else {
            return (
                <div className="day-details-empty">
                    Click on a day to see details
                </div>
            );
        }
    }
}

const mapStateToProps = state => ({
    currentDay: state.menu.currentDay
})

export default connect(mapStateToProps, null)(DayDetails)