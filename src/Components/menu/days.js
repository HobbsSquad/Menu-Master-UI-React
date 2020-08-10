import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getDays } from '../../Redux/actions/menu';

import Day from './day';

class Days extends Component {

    componentDidMount() {
        this.props.getDays();
    }

    render() {
        if (this.props.daysStatus === 'daysLoaded') {
            return this.props.days.map(dayData => {
                return (<Day key={dayData._id} dayData={dayData} />);
            });
        } else {
            return (<h4>Data Loading</h4>);
        }
    }

}

const mapDispatchToProps = {
    getDays
}

const mapStateToProps = state => ({
    daysStatus: state.menu.daysStatus,
    days: state.menu.days
})

export default connect(mapStateToProps, mapDispatchToProps)(Days)