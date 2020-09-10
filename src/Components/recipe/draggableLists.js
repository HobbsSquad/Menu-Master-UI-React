import React, { Component } from 'react';
import { connect } from 'react-redux';

import DraggableItem from './draggableItem';

import './draggableLists.css';

class DraggableLists extends Component {

    constructor(props) {
        super(props)
        this.state = {
            sourceList: this.props.sourceList,
            targetList: this.props.targetList,
            draggedItem: null,
            ingredientList: this.props.targetList,
            sourceFilter: ''
        }
    }

    targetDropHandler = (e) => {
        if (this.state.draggedItem) {
            e.preventDefault();
            let itemExists = false;
            for (let i = 0; i < this.state.targetList.length; i++) {
                if (this.state.targetList[i]._id === this.state.draggedItem._id) {
                    itemExists = true;
                    break;
                }
            }
            if (!itemExists) {
                let newSource = this.state.sourceList.map(item => item);
                const newTarget = this.state.targetList.map(item => item);
                let newIngredientList = this.state.ingredientList.map(item => item);
                newTarget.push(this.state.draggedItem);
                newIngredientList.push({
                    _id: this.state.draggedItem._id,
                    name: this.state.draggedItem.name,
                    description: this.state.draggedItem.description,
                    productLink: this.state.draggedItem.productLink,
                    imageLink: this.state.draggedItem.imageLink,
                    quantity: ''
                });
                newSource = newSource.filter(item => {
                    return item._id !== this.state.draggedItem._id;
                });
                this.props.changeHandler("ingredients", newIngredientList);
                this.setState({
                    sourceList: newSource,
                    targetList: newTarget,
                    ingredientList: newIngredientList
                });
            }
            this.setState({
                draggedItem: null
            });
        }
    }

    sourceDropHandler = (e) => {
        if (this.state.draggedItem) {
            e.preventDefault();
            let itemExists = false;
            for (let i = 0; i < this.state.sourceList.length; i++) {
                if (this.state.sourceList[i]._id === this.state.draggedItem._id) {
                    itemExists = true;
                    break;
                }
            }
            if (!itemExists) {
                let newTarget = this.state.targetList.map(item => item);
                let newIngredientList = this.state.ingredientList.map(item => item);
                this.insertItemToSource(this.state.draggedItem);
                newTarget = newTarget.filter(item => {
                    return item._id !== this.state.draggedItem._id;
                });
                newIngredientList = newIngredientList.filter(item => {
                    return item._id !== this.state.draggedItem._id;
                });
                this.props.changeHandler("ingredients", newIngredientList);
                this.setState({
                    targetList: newTarget,
                    ingredientList: newIngredientList
                });
            }
            this.setState({
                draggedItem: null
            });
        }
    }

    setDraggedItem = (item) => {
        this.setState({
            draggedItem: item
        });
    }

    changeQuantity = (Id, newQuantity) => {
        let newIngredientList = this.state.ingredientList.map(item => {
            return (Id === item._id) ? { ...item, quantity: newQuantity } : item;
        });
        this.props.changeHandler("ingredients", newIngredientList);
        this.setState({
            ingredientList: newIngredientList
        });
    }

    insertItemToSource = (newItem) => {
        let newSource = [];
        let index = this.state.sourceList.length;
        for (let i = 0; i < this.state.sourceList.length; i++) {
            if (newItem.name.localeCompare(this.state.sourceList[i].name) === -1) {
                index = i;
                break;
            }
        }
        newSource.push(...this.state.sourceList.slice(0, index), newItem, ...this.state.sourceList.slice(index, this.state.sourceList.length));
        this.setState({
            sourceList: newSource
        });
    }

    render() {
        return (
            <div className="draggable-lists-container">
                <div className="draggable-lists-target" onDrop={this.targetDropHandler} onDragOver={(e) => e.preventDefault()}>
                    <div className="draggable-lists-target-header">
                        <h2>Ingredients For</h2>
                    </div>
                    <div className="draggable-lists-target-body">
                        {this.state.targetList.map(item => {
                            return <DraggableItem itemData={item} setDraggedItem={this.setDraggedItem} changeQuantity={this.changeQuantity} inTarget={true} />
                        })}
                    </div>
                </div>
                <div className="draggable-lists-source" onDrop={this.sourceDropHandler} onDragOver={(e) => e.preventDefault()}>
                    <div className="draggable-lists-source-header">
                        <h2>Ingredients Available</h2>
                    </div>
                    <div className="draggable-lists-source-body">
                        <div className="draggable-lists-source-filter">
                            <label>Search</label><br />
                            <input type="text" value={this.state.sourceFilter} onChange={(e) => this.setState({ sourceFilter: e.target.value })} />
                        </div>
                        <div className="draggable-lists-source-list">
                            {this.state.sourceList.filter((ingredient) => {
                                return (this.state.sourceFilter !== '') ? (ingredient.name.toUpperCase().includes(this.state.sourceFilter.toUpperCase()) || (ingredient.description && ingredient.description.toUpperCase().includes(this.state.sourceFilter.toUpperCase()))) : true;
                            }).map(item => {
                                return <DraggableItem itemData={item} setDraggedItem={this.setDraggedItem} changeQuantity={this.changeQuantity} inTarget={false} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ingredients: state.recipe.ingredients
})

export default connect(mapStateToProps, null)(DraggableLists)