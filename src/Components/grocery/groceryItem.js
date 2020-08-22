import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getIngredient } from '../../Redux/actions/grocery';

import './groceryItem.css';

class GroceryItem extends Component {

    displayDetails = () => {
        this.props.getIngredient(this.props.ingredientData._id);
    }

    render() {
        const name = this.props.ingredientData.name;
        const size = this.props.ingredientData.size;

        return (
            <div className="grocery-item-container">
                <button className="grocery-item-button" onClick={this.displayDetails}>
                    <div className="grocery-item-button-name">{name}</div>
                    <div className="grocery-item-button-size">{size}</div>
                </button>
            </div>
        );
    }
}

const mapDispatchToProps = {
    getIngredient
}

export default connect(null, mapDispatchToProps)(GroceryItem)