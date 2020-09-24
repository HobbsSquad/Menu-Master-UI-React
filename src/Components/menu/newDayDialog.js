import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dialog } from 'primereact/dialog';

import { getMeals } from '../../Redux/actions/menu';
import { newDay } from '../../Redux/actions/menu';
import DraggableLists from '../draggableLists';

import './newDayDialog.css';

class NewDayDialog extends Component {

    constructor(props) {
        super(props)
        this.state = {
            newItem: {
                date: '',
                mealSlots: []
            }
        }
    }

    componentDidMount() {
        this.props.getMeals();
    }

    submitButtonHandler = () => {
        this.props.newDay(this.state.newItem);
        this.props.cancel();
    }

    resetState = () => {
        this.setState({
            newItem: {
                date: '',
                mealSlots: []
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
        return (
            <div className="new-day-dialog-container">
                <Dialog header="New Day" visible={this.props.visible} onHide={() => this.props.cancel()} onShow={() => this.resetState()}>
                    <div className="new-day-dialog-body">
                        <div className="new-day-dialog-top">
                            <label>Date</label><br />
                            <input type="date" value={this.state.newItem.date} onChange={(e) => this.updateAttribute("date", e.target.value)} /><br />
                        </div>
                        <div className="new-day-dialog-lists">
                            <DraggableLists
                                sourceList={this.props.meals}
                                targetList={[]}
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
    newDay,
    getMeals
}

const mapStateToProps = state => ({
    meals: state.menu.meals
})

export default connect(mapStateToProps, mapDispatchToProps)(NewDayDialog)