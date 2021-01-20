import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dialog } from 'primereact/dialog';

import { getMeals } from '../../Redux/actions/menu';
import { updateDay } from '../../Redux/actions/menu';
import DraggableLists from '../draggableLists';

import './updateDayDialog.css';

class UpdateDayDialog extends Component {

    constructor(props) {
        super(props)
        this.state = {
            newItem: {
                _id: this.props.currentDay._id,
                date: this.props.currentDay.date,
                mealSlots: this.props.currentDay.mealSlots
            }
        }
    }

    componentDidMount() {
        this.props.getMeals();
    }

    submitButtonHandler = () => {
        this.props.updateDay({...this.state.newItem, mealSlots: this.state.newItem.mealSlots.map(item => {
            if(!this.props.currentDay.mealSlots.includes(item)) {
                delete item._id;
            }
            return item;
        })});
        this.props.cancel();
    }

    resetState = () => {
        this.setState({
            newItem: {
                _id: this.props.currentDay._id,
                date: this.props.currentDay.date,
                mealSlots: this.props.currentDay.mealSlots
            }
        });
    }

    updateAttribute = (key, value) => {
        this.setState({
            newItem: {
                ...this.state.newItem,
                [key]: value
            }
        });
    }

    render() {
        const filteredMeals = this.props.meals.filter(item => {
            for (let i = 0; i < this.props.currentDay.mealSlots.length; i++) {
                if (item.name === this.props.currentDay.mealSlots[i].name) {
                    return false;
                }
            }
            return true;
        });
        return (
            <div className="update-day-dialog-container">
                <Dialog header="Update Day" visible={this.props.visible} onHide={() => this.props.cancel()} onShow={() => this.resetState()}>
                    <div className="update-day-dialog-body">
                        <div className="update-day-dialog-top">
                            <label>Date</label><br />
                            <input type="date" value={this.state.newItem.date.substring(0, 10)} onChange={(e) => this.updateAttribute("date", e.target.value)} /><br />
                        </div>
                        <div className="update-day-dialog-lists">
                            <DraggableLists
                                sourceList={filteredMeals}
                                targetList={this.props.currentDay.mealSlots}
                                changeHandler={(returnedList) => this.updateAttribute("mealSlots", returnedList)}
                                filterSource={false}
                                sourceLabel="Meals Available"
                                targetLabel="Meals for the Day"
                                sortSourceBy="order"
                            />
                        </div>
                        <input type="button" onClick={this.submitButtonHandler} value="Submit" />
                    </div>
                </Dialog>
            </div>
        );
    }
}

const mapDispatchToProps = {
    updateDay,
    getMeals
}

const mapStateToProps = state => ({
    meals: state.menu.meals,
    currentDay: state.menu.currentDay
})

export default connect(mapStateToProps, mapDispatchToProps)(UpdateDayDialog)