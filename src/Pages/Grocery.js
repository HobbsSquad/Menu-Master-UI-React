import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from '../Components/navbar';
import GroceryItems from '../Components/grocery/groceryItems';
import IngredientDetails from '../Components/grocery/ingredientDetails';

import './Grocery.css';

class GroceryPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedIngredient: null
        }
    }

    selectIngredient = (ingredient) => {
        this.setState({selectedIngredient: ingredient});
    }

    render() {
        return (
            <div className="grocery-container">
                <Navbar />
                <div className="grocery-header">
                    <h1>Grocery Items</h1>
                </div>
                <div className="grocery-body">
                    <GroceryItems selectIngredient={this.selectIngredient} />
                    <IngredientDetails selectedIngredient={this.state.selectedIngredient} />
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    ingredients: state.grocery.ingredients
})

export default connect(mapStateToProps, null)(GroceryPage);
