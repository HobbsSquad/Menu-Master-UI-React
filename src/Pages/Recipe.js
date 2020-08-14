import React, { Component } from 'react';

import Recipes from '../Components/recipe/recipes';
import RecipeDetails from '../Components/recipe/recipeDetails';
import Navbar from '../Components/navbar';

import './Recipe.css';

class RecipePage extends Component {
    render() {
        return (
            <div className="recipe-container">
                <Navbar />
                <div className="recipe-header">
                    <h1>Recipes</h1>
                </div>
                <div className="recipe-body">
                    <Recipes />
                    <RecipeDetails />
                </div>
            </div>
        );
    }
}

export default RecipePage;