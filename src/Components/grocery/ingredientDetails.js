import React, { Component } from 'react';
import { connect } from 'react-redux';

import UpdateGroceryItemDialog from './updateGroceryItemDialog';
import DeleteGroceryItemDialog from './deleteGroceryItemDialog';

import './ingredientDetails.css';

class IngredientDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showUpdateGroceryItemDialog: false,
            showDeleteGroceryItemDialog: false
        }
    }

    render() {
        if (this.props.ingredient) {
            return (
                <div className="ingredient-details-container">
                    <div className="ingredient-details-header">
                        <h3>{this.props.ingredient.name}</h3>
                        <h4>{this.props.ingredient.size}</h4>
                    </div>
                    <div className="ingredient-details-body">
                        <h3>{this.props.ingredient.description}</h3>
                        <a href={this.props.ingredient.productLink} target="_blank" rel="noopener noreferrer"><img alt="ingredientImage" src={this.props.ingredient.imageLink}/></a>
                        <button className="grocery-update-button" onClick={() => this.setState({ showUpdateGroceryItemDialog: true })}>Update Grocery Item</button>
                        <UpdateGroceryItemDialog cancel={() => this.setState({ showUpdateGroceryItemDialog: false })} visible={this.state.showUpdateGroceryItemDialog} />
                        <button className="grocery-delete-button" onClick={() => this.setState({ showDeleteGroceryItemDialog: true })}>Delete Grocery Item</button>
                        <DeleteGroceryItemDialog cancel={() => this.setState({ showDeleteGroceryItemDialog: false })} visible={this.state.showDeleteGroceryItemDialog} />
                    </div>
                </div>
            );
        } else {
            return (
                <h4>Click on a grocery item</h4>
            );
        }
    }
}

const mapStateToProps = state => ({
    ingredient: state.grocery.ingredient
})

export default connect(mapStateToProps, null)(IngredientDetails)