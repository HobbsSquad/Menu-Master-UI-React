import React, { Component } from 'react';

import Recipe from './recipe';

class Recipes extends Component {

    render() {
        return (
            this.props.recipes.map(recipe => {
                return <Recipe key={recipe._id} recipeData={recipe}/>
            })
        );
    }
}

export default Recipes;