import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getRecipes } from '../../Redux/actions/recipe';

import Recipe from './recipe';
import RecipeFilter from './recipeFilter';

import './recipes.css';

class Recipes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filter: ''
        }
    }

    componentDidMount() {
        this.props.getRecipes();
    }

    render() {
        if (this.props.recipesStatus === 'recipesLoaded') {
            return (
                <div className="recipes-container">
                    <div className="recipes-filter">
                        <RecipeFilter filter={this.state.filter} updateFilter={(e) => this.setState({ filter: e.target.value.toUpperCase() })} />
                    </div>
                    <div className="recipes-list">
                        {this.props.recipes.filter(recipe => {
                            return (this.state.filter !== '') ? (recipe.name.toUpperCase().includes(this.state.filter) || (recipe.description && recipe.description.toUpperCase().includes(this.state.filter))) : true;
                        }).map(recipe => {
                            return <Recipe key={recipe._id} recipeData={recipe} />;
                        })}
                    </div>
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