import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getIngredients } from '../../Redux/actions/grocery';

import GroceryItem from './groceryItem';
import GroceryFilter from './groceryFilter';

import './groceryItems.css';

class GroceryItems extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filter: ''
        }
    }

    componentDidMount() {
        this.props.getIngredients();
    }

    render() {
        if (this.props.ingredientsStatus === 'ingredientsLoaded') {
            let groceryList = this.props.ingredients.filter(ingredient => {
                return (this.state.filter !== '') ? (ingredient.name.toUpperCase().includes(this.state.filter) || (ingredient.description && ingredient.description.toUpperCase().includes(this.state.filter))) : true;
            }).map(ingredient => {
                return <GroceryItem key={ingredient._id} ingredientData={ingredient} />;
            });
            if (!groceryList.length) {
                groceryList = <div className="grocery-items-list-empty">No results</div>;
            }

            return (
                <div className="grocery-items-container">
                    <div className="grocery-items-filter">
                        <GroceryFilter filter={this.state.filter} updateFilter={(e) => this.setState({ filter: e.target.value.toUpperCase() })} />
                    </div>
                    <div className="grocery-items-list">
                        {groceryList}
                    </div>
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