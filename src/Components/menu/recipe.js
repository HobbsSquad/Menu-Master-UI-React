import React, { Component } from 'react';

class Recipe extends Component {

    render() {
        return (
            <p>{this.props.recipeData.name}</p>
        );
    }
}

export default Recipe;