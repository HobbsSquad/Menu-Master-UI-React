import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

import { getCurrentDay } from '../../Redux/actions/menu';

import './day.css';

class Day extends Component {

    displayDetails = async event => {
        event.preventDefault();
        this.props.getCurrentDay(this.props.dayData._id);
    }

    render() {
        const dotw = moment(this.props.dayData.date).format("dddd");
        const date = moment(this.props.dayData.date).format("MM[/]DD[/]YYYY");
        return (
            <div className="day-container">
                <button className="day-button" onClick={this.displayDetails}>
                    <div className="day-button-dotw">{dotw}</div>
                    <div className="day-button-date">{date}</div>
                </button>
            </div>
        );
    }
}

const mapDispatchToProps = {
    getCurrentDay
}

const mapStateToProps = state => ({
    currentDayStatus: state.menu.currentDayStatus,
    currentDay: state.menu.currentDay
})

export default connect(mapStateToProps, mapDispatchToProps)(Day)