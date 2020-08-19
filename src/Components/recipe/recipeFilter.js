import React, { Component } from 'react';

import './recipeFilter.css';

class RecipeFilter extends Component {

    render() {
        return (
            <div className="recipe-filter-container">
                <div className="recipe-filter-title">
                    <label>Search for recipe:</label>
                </div>
                <div className="recipe-filter-search">
                    <input type="search" onChange={this.props.updateFilter} />
                </div>
            </div>
        );
    }
}

export default RecipeFilter;