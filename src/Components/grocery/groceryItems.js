import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getIngredients } from '../../Redux/actions/grocery';

import GroceryItem from './groceryItem';

import './groceryItems.css';

class GroceryItems extends Component {

    componentDidMount() {
        this.props.getIngredients();
    }

    render() {
        if (this.props.ingredientsStatus === 'ingredientsLoaded') {
            return (
                <div className="grocery-items-container">
                    {this.props.ingredients.map(ingredient => {
                        return <GroceryItem key={ingredient._id} ingredientData={ingredient} selectIngredient={this.props.selectIngredient}/>;
                    })}
                </div>
            );
        } else {
            return null;
        }
    }
}

const mapDispatchToProps = {
    getIngredients
}

const mapStateToProps = state => ({
    ingredientsStatus: state.grocery.ingredientsStatus,
    ingredients: state.grocery.ingredients
})

export default connect(mapStateToProps, mapDispatchToProps)(GroceryItems)