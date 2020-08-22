import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from '../Components/navbar';
import GroceryItems from '../Components/grocery/groceryItems';
import IngredientDetails from '../Components/grocery/ingredientDetails';
import NewGroceryItemDialog from '../Components/grocery/newGroceryItemDialog';

import './Grocery.css';

class GroceryPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedIngredient: null,
            showNewGroceryItemDialog: false
        }
    }

    render() {
        return (
            <div className="grocery-container">
                <Navbar />
                <div className="grocery-header">
                    <h1>Grocery Items</h1>
                </div>
                <div className="grocery-body">
                    <button className="grocery-new-button" onClick={() => this.setState({ showNewGroceryItemDialog: true })}>Create New Grocery Item</button>
                    <NewGroceryItemDialog cancel={() => this.setState({ showNewGroceryItemDialog: false })} visible={this.state.showNewGroceryItemDialog}/>
                    <GroceryItems />
                    <IngredientDetails />
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    ingredients: state.grocery.ingredients
})

export default connect(mapStateToProps, null)(GroceryPage);
