import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dialog } from 'primereact/dialog';

import { newRecipe } from '../../Redux/actions/recipe';
import { getIngredients } from '../../Redux/actions/grocery';
import DraggableLists from './draggableLists';

import './newRecipeDialog.css';

class NewRecipeDialog extends Component {

    constructor(props) {
        super(props)
        this.state = {
            newItem: {
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
        this.props.newRecipe(this.state.newItem);
        this.props.cancel();
    }

    resetState = () => {
        this.setState({
            newItem: {
                name: '',
                description: '',
                ingredients: []
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
            <div className="new-recipe-item-dialog-container">
                <Dialog header="New Grocery Item" visible={this.props.visible} onHide={() => this.props.cancel()} onShow={() => this.resetState()}>
                    <div className="new-recipe-item-dialog-body">
                        <div className="new-recipe-item-dialog-top">
                            <label>Name</label><br />
                            <input type="text" name="itemName" value={this.state.newItem.name} onChange={(e) => this.updateAttribute("name", e.target.value)} /><br />
                            <label>Description</label><br />
                            <input type="text" name="itemDescription" value={this.state.newItem.description} onChange={(e) => this.updateAttribute("description", e.target.value)} /><br />
                        </div>
                        <div className="new-recipe-item-dialog-lists">
                            <DraggableLists sourceList={this.props.ingredients} targetList={[]} changeHandler={this.updateAttribute} />
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