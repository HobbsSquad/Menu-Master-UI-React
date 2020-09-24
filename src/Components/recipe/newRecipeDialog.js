import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dialog } from 'primereact/dialog';

import { newRecipe } from '../../Redux/actions/recipe';
import { getIngredients } from '../../Redux/actions/grocery';
import DraggableLists from '../draggableLists';
import DraggableRecipe from './draggableRecipe';

import './newRecipeDialog.css';

class NewRecipeDialog extends Component {

    constructor(props) {
        super(props)
        this.state = {
            newItem: {
                name: '',
                description: '',
                ingredients: []
            },
            nameError: false,
            descriptionError: false
        }
    }

    componentDidMount() {
        this.props.getIngredients();
    }

    submitButtonHandler = () => {
        const nameErr = this.state.newItem.name === "";
        const descriptionErr = this.state.newItem.description === "";
        this.setState({nameError: nameErr, descriptionError: descriptionErr});
        if(!(nameErr || descriptionErr)) {
            this.props.newRecipe(this.state.newItem);
            this.props.cancel();
        }
    }

    resetState = () => {
        this.setState({
            newItem: {
                name: '',
                description: '',
                ingredients: []
            },
            nameError: false,
            descriptionError: false
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
            <div className="new-recipe-item-dialog-container">
                <Dialog header="New Grocery Item" visible={this.props.visible} onHide={() => this.props.cancel()} onShow={() => this.resetState()}>
                    <div className="new-recipe-item-dialog-body">
                        <div className="new-recipe-item-dialog-top">
                            <div className="name-label-and-error">
                                <label>Name</label>
                                {this.state.nameError && <div className="name-error-message">This field is required</div>}
                            </div>
                            <input type="text" name="itemName" value={this.state.newItem.name} onChange={(e) => this.updateAttribute("name", e.target.value)} /><br />
                            <div className="description-label-and-error">
                                <label>Description</label>
                                {this.state.descriptionError && <div className="description-error-message">This field is required</div>}
                            </div>
                            <input type="text" name="itemDescription" value={this.state.newItem.description} onChange={(e) => this.updateAttribute("description", e.target.value)} /><br />
                        </div>
                        <div className="new-recipe-item-dialog-lists">
                            <DraggableLists
                                sourceList={this.props.ingredients}
                                targetList={[]}
                                changeHandler={(returnedList) => this.updateAttribute("ingredients", returnedList)}
                                filterSource={true}
                                sourceLabel="Ingredients Available"
                                targetLabel="Ingredients for Recipe"
                                searchLabel="Search"
                                sortSourceBy="name"
                                draggableItem={DraggableRecipe}
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
    newRecipe,
    getIngredients
}

const mapStateToProps = state => ({
    ingredients: state.grocery.ingredients
})

export default connect(mapStateToProps, mapDispatchToProps)(NewRecipeDialog)