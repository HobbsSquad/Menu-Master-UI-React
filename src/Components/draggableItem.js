import React, { Component } from 'react';

import './draggableItem.css';

class DraggableItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            active: false
        }
    }

    startDragHandler = (e) => {
        this.props.setDraggedItem(this.props.itemData);
    }

    render() {
        return (
            <div className="draggable-item-container" draggable={!this.state.active} onDragStart={this.startDragHandler}>
                <div className="draggable-item-name">
                    <h4>{this.props.itemData.name}</h4>
                </div>
            </div>
        );
    }
}

export default DraggableItem;