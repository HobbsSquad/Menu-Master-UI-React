import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dialog } from 'primereact/dialog';

import { getRecipes } from '../../Redux/actions/recipe';
import { updateDay } from '../../Redux/actions/menu';
import DraggableLists from '../draggableLists';

import './updateMealDialog.css';

class UpdateMealDialog extends Component {

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
        this.props.getRecipes();
    }

    submitButtonHandler = () => {
        this.props.updateDay(this.state.newItem);
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

    updateMealSlots = (newRecipes) => {
        this.setState({
            newItem: {
                ...this.state.newItem,
                mealSlots: this.state.newItem.mealSlots.map(item => {
                    return item._id !== this.props.mealSlot._id ? item : { ...item, recipes: newRecipes };
                })
            }
        });
    }

    render() {
        if (this.props.recipesStatus === "recipesLoaded") {
            const filteredRecipes = this.props.recipes.filter(item => {
                for (let i = 0; i < this.props.mealSlot.recipes.length; i++) {
                    if (item._id === this.props.mealSlot.recipes[i]._id) {
                        return false;
                    }
                }
                return true;
            });
            return (
                <div className="update-meal-dialog-container">
                    <Dialog header="Update Meal" visible={this.props.visible} onHide={() => this.props.cancel()} onShow={() => this.resetState()}>
                        <div className="update-meal-dialog-body">
                            <div className="update-meal-dialog-lists">
                                <DraggableLists
                                    sourceList={filteredRecipes}
                                    targetList={this.props.mealSlot.recipes}
                                    changeHandler={this.updateMealSlots}
                                    filterSource={true}
                                    sourceLabel="Recipes Available"
                                    targetLabel="Recipes for the Day"
                                    sortSourceBy="name"
                                />
                            </div>
                            <input type="button" onClick={this.submitButtonHandler} value="Submit" />
                        </div>
                    </Dialog>
                </div>
            );
        }
        return (
            <div>
                <h2>Data Loading</h2>
            </div>
        );
    }
}

const mapDispatchToProps = {
    updateDay,
    getRecipes
}

const mapStateToProps = state => ({
    recipes: state.recipe.recipes,
    currentDay: state.menu.currentDay,
    recipesStatus: state.recipe.recipesStatus
})

export default connect(mapStateToProps, mapDispatchToProps)(UpdateMealDialog)