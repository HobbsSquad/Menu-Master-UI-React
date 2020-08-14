import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getCurrentRecipe } from '../../Redux/actions/recipe';

import './recipe.css';

class Recipe extends Component {

    displayDetails = async event => {
        event.preventDefault();
        this.props.getCurrentRecipe(this.props.recipeData._id);
    }

    render() {
        return (
            <div className="recipe-container">
                <button className="recipe-button" onClick={this.displayDetails}>
                    <div className="recipe-button-name">{this.props.recipeData.name}</div>
                    <div className="recipe-button-description">{this.props.recipeData.description}</div>
                </button>
            </div>
        );
    }
}

const mapDispatchToProps = {
    getCurrentRecipe
}

export default connect(null, mapDispatchToProps)(Recipe)