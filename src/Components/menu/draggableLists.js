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
            returnedList: this.props.targetList,
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
                let newReturnedList = this.state.returnedList.map(item => item);
                newTarget.push(this.state.draggedItem);
                newReturnedList.push(this.state.draggedItem);
                newSource = newSource.filter(item => {
                    return item._id !== this.state.draggedItem._id;
                });
                this.props.changeHandler("mealSlots", newReturnedList);
                this.setState({
                    sourceList: newSource,
                    targetList: newTarget,
                    returnedList: newReturnedList
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
                let newReturnedList = this.state.returnedList.map(item => item);
                this.insertItemToSource(this.state.draggedItem);
                newTarget = newTarget.filter(item => {
                    return item._id !== this.state.draggedItem._id;
                });
                newReturnedList = newReturnedList.filter(item => {
                    return item._id !== this.state.draggedItem._id;
                });
                this.props.changeHandler("mealSlots", newReturnedList);
                this.setState({
                    targetList: newTarget,
                    returnedList: newReturnedList
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

    insertItemToSource = (newItem) => {
        let newSource = [];
        let index = this.state.sourceList.length;
        for (let i = 0; i < this.state.sourceList.length; i++) {
            if (newItem.order < this.state.sourceList[i].order) {
                index = i;
                break;
            }
        }
        newSource.push(...this.state.sourceList.slice(0, index), { ...newItem }, ...this.state.sourceList.slice(index, this.state.sourceList.length));
        this.setState({
            sourceList: newSource
        });
    }

    render() {
        return (
            <div className="draggable-lists-container">
                <div className="draggable-lists-target" onDrop={this.targetDropHandler} onDragOver={(e) => e.preventDefault()}>
                    <div className="draggable-lists-target-header">
                        <h2>Recipes For</h2>
                    </div>
                    <div className="draggable-lists-target-body">
                        {this.state.targetList.map(item => {
                            return <DraggableItem itemData={item} setDraggedItem={this.setDraggedItem} inTarget={true} />
                        })}
                    </div>
                </div>
                <div className="draggable-lists-source" onDrop={this.sourceDropHandler} onDragOver={(e) => e.preventDefault()}>
                    <div className="draggable-lists-source-header">
                        <h2>Recipes Available</h2>
                    </div>
                    <div className="draggable-lists-source-body">
                        <div className="draggable-lists-source-list">
                            {this.state.sourceList.map(item => {
                                return <DraggableItem itemData={item} setDraggedItem={this.setDraggedItem} inTarget={false} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    recipes: state.recipe.recipes
})

export default connect(mapStateToProps, null)(DraggableLists)