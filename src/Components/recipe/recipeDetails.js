import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteRecipe } from '../../Redux/actions/recipe';
import Ingredients from './ingredients';
import DeleteRecipeDialog from './deleteRecipeDialog';

import './recipeDetails.css';

class RecipeDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showDeleteRecipeDialog: false
        }
    }

    deleteButtonHandler = () => {
        this.props.deleteRecipe()
    }

    render() {
        if (this.props.currentRecipe) {
            return (
                <div className="recipe-details-container">
                    <div className="recipe-details-header">
                        <div className="recipe-details-header-name">{this.props.currentRecipe.name}</div>
                        <div className="recipe-details-header-description">{this.props.currentRecipe.description}</div>
                    </div>
                    <div className="recipe-details-body">
                        <Ingredients />
                        <div className="recipe-edit-buttons">
                            <button className="recipe-update-button" onClick={this.props.openEditDialog}>Edit Recipe</button>
                            <button className="recipe-delete-button" onClick={() => this.setState({ showDeleteRecipeDialog: true })}>Delete Recipe</button>
                        </div>
                        <DeleteRecipeDialog cancel={() => this.setState({ showDeleteRecipeDialog: false })} visible={this.state.showDeleteRecipeDialog} />
                    </div>
                </div>
            );
        } else {
            return (
                <div className="recipe-details-empty">
                    Click on a recipe to see details
                </div>
            );
        }
    }
}

const mapDispatchToProps = {
    deleteRecipe
}

const mapStateToProps = state => ({
    currentRecipe: state.recipe.currentRecipe
})

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetails)