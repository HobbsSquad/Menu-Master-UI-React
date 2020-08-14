import React, { Component } from 'react';
import { connect } from 'react-redux';

import Ingredient from './ingredient';

class Ingredients extends Component {
    render() {
        return (
            <div className="ingredients-container">
                {this.props.currentRecipe.ingredients.map(ingredient => {
                    return <Ingredient key={ingredient._id} ingredientData={ingredient} />;
                })}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currentRecipe: state.recipe.currentRecipe
})

export default connect(mapStateToProps, null)(Ingredients)