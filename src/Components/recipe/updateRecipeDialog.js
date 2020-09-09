import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dialog } from 'primereact/dialog';

import { updateRecipe } from '../../Redux/actions/recipe';
import { getIngredients } from '../../Redux/actions/grocery';
import DraggableLists from './draggableLists';

import './updateRecipeDialog.css';

class UpdateRecipeDialog extends Component {

    constructor(props) {
        super(props)
        this.state = {
            newItem: {
                _id: '',
                name: '',
                description: '',
                ingredients: []
            }
        }
    }

    componentDidMount() {
        this.props.getIngredients();
    }

    submitButtonHandler = () => {
        this.props.updateRecipe(this.state.newItem);
        this.props.cancel();
    }

    resetState = () => {
        this.setState({
            newItem: {
                _id: this.props.currentRecipe._id,
                name: this.props.currentRecipe.name,
                description: this.props.currentRecipe.description,
                ingredients: this.props.currentRecipe.ingredients
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
        if (this.props.visible) {
            const filteredIngredients = this.props.ingredients.filter(item => {
                for(let i = 0; i < this.props.currentRecipe.ingredients.length; i++) {
                    if(item.name === this.props.currentRecipe.ingredients[i].name) {
                        return false;
                    }
                }
                return true;
            });
            return (
                <div className="update-recipe-item-dialog-container">
                    <Dialog header="Update Grocery Item" visible={this.props.visible} onHide={() => this.props.cancel()} onShow={() => this.resetState()}>
                        <div className="update-recipe-item-dialog-body">
                            <div className="update-recipe-item-dialog-top">
                                <label>Name</label><br />
                                <input type="text" name="itemName" value={this.state.newItem.name} onChange={(e) => this.updateAttribute("name", e.target.value)} /><br />
                                <label>Description</label><br />
                                <input type="text" name="itemDescription" value={this.state.newItem.description} onChange={(e) => this.updateAttribute("description", e.target.value)} /><br />
                            </div>
                            <div className="update-recipe-item-dialog-lists">
                                <DraggableLists sourceList={filteredIngredients} targetList={this.props.currentRecipe.ingredients} changeHandler={this.updateAttribute} />
                            </div>
                            <input type="button" onClick={this.submitButtonHandler} value="Submit" />
                        </div>
                    </Dialog>
                </div>
            );
        } else {
            return null;
        }
    }
}

const mapDispatchToProps = {
    updateRecipe,
    getIngredients
}

const mapStateToProps = state => ({
    ingredients: state.grocery.ingredients,
    currentRecipe: state.recipe.currentRecipe
})


export default connect(mapStateToProps, mapDispatchToProps)(UpdateRecipeDialog)