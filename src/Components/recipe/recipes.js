import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getRecipes } from '../../Redux/actions/recipe';

import Recipe from './recipe';

import './recipes.css';

class Recipes extends Component {

    componentDidMount() {
        this.props.getRecipes();
    }

    render() {
        if (this.props.recipesStatus === 'recipesLoaded') {
            return (
                <div className="recipes-container">
                        {this.props.recipes.map(recipeData => {
                            return <Recipe key={recipeData._id} recipeData={recipeData} />;
                        })}
                </div>
            );
        } else {
            return <h4>Data Loading</h4>;
        }
    }

}

const mapDispatchToProps = {
    getRecipes
}

const mapStateToProps = state => ({
    recipesStatus: state.recipe.recipesStatus,
    recipes: state.recipe.recipes
})

export default connect(mapStateToProps, mapDispatchToProps)(Recipes)