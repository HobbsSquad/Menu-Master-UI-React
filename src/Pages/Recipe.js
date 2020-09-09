import React, { Component } from 'react';

import Recipes from '../Components/recipe/recipes';
import RecipeDetails from '../Components/recipe/recipeDetails';
import Navbar from '../Components/navbar';
import NewRecipeDialog from '../Components/recipe/newRecipeDialog';
import UpdateRecipeDialog from '../Components/recipe/updateRecipeDialog';

import './Recipe.css';

class RecipePage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showNewRecipeDialog: false,
            showUpdateRecipeDialog: false
        }
    }

    render() {
        return (
            <div className="recipe-container">
                <Navbar />
                <div className="recipe-header">
                    <h1>Recipes</h1>
                </div>
                <div className="recipe-body">
                    <button className="recipe-new-button" onClick={() => this.setState({ showNewRecipeDialog: true })}>Create New Recipe</button>
                    <NewRecipeDialog cancel={() => this.setState({ showNewRecipeDialog: false })} visible={this.state.showNewRecipeDialog}/>
                    <UpdateRecipeDialog cancel={() => this.setState({ showUpdateRecipeDialog: false })} visible={this.state.showUpdateRecipeDialog} />
                    <Recipes />
                    <RecipeDetails openEditDialog={() => this.setState({showUpdateRecipeDialog: true})} />
                </div>
            </div>
        );
    }
}

export default RecipePage;