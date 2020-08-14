import React, { Component } from 'react';
import { connect } from 'react-redux';

import Ingredients from './ingredients';

import './recipeDetails.css';

class RecipeDetails extends Component {

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

const mapStateToProps = state => ({
    currentRecipe: state.recipe.currentRecipe
})

export default connect(mapStateToProps, null)(RecipeDetails)