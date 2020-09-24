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
                this.props.changeHandler(newReturnedList);
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
                this.props.changeHandler(newReturnedList);
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
            if (newItem[this.props.sortSourceBy] < this.state.sourceList[i][this.props.sortSourceBy]) {
                index = i;
                break;
            }
        }
        newSource.push(...this.state.sourceList.slice(0, index), { ...newItem }, ...this.state.sourceList.slice(index, this.state.sourceList.length));
        this.setState({
            sourceList: newSource
        });
    }

    changeItem = (itemId, newItem) => {
        let newList = this.state.returnedList.map(item => {
            return item._id === itemId ? newItem : item;
        });
        this.setState({returnedList: newList});
        this.props.changeHandler(newList);
    }

    displaySource = () => {
        let list = this.state.sourceList;
        if(this.props.filterSource) {
            list = list.filter((ingredient) => {
                return (this.state.sourceFilter !== '') ? (ingredient.name.toUpperCase().includes(this.state.sourceFilter.toUpperCase()) || (ingredient.description && ingredient.description.toUpperCase().includes(this.state.sourceFilter.toUpperCase()))) : true;
            })
        }
        const CurrentDraggableItem = this.props.draggableItem ? this.props.draggableItem : DraggableItem;
        return list.map(item => {
            return <CurrentDraggableItem itemData={item} setDraggedItem={this.setDraggedItem} changeHandler={this.changeItem} inTarget={false} />
        })
    }

    render() {
        const CurrentDraggableItem = this.props.draggableItem ? this.props.draggableItem : DraggableItem;
        return (
            <div className="draggable-lists-container">
                <div className="draggable-lists-target" onDrop={this.targetDropHandler} onDragOver={(e) => e.preventDefault()}>
                    <div className="draggable-lists-target-header">
                        <h2>{this.props.targetLabel}</h2>
                    </div>
                    <div className="draggable-lists-target-body">
                        {this.state.targetList.map(item => {
                            return <CurrentDraggableItem itemData={item} setDraggedItem={this.setDraggedItem} changeHandler={this.changeItem} inTarget={true} />
                        })}
                    </div>
                </div>
                <div className="draggable-lists-source" onDrop={this.sourceDropHandler} onDragOver={(e) => e.preventDefault()}>
                    <div className="draggable-lists-source-header">
                        <h2>{this.props.sourceLabel}</h2>
                    </div>
                    <div className="draggable-lists-source-body">
                        {this.props.filterSource &&
                            <div className="draggable-lists-source-filter">
                                <label>{this.props.searchLabel}</label><br />
                                <input type="text" value={this.state.sourceFilter} onChange={(e) => this.setState({ sourceFilter: e.target.value })} />
                            </div>
                        }
                        <div className="draggable-lists-source-list">
                            {this.displaySource()}
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