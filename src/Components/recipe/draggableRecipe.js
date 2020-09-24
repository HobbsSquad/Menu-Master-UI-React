import React, { Component } from 'react';
import { Inplace, InplaceDisplay, InplaceContent } from 'primereact/inplace';
import { InputText } from 'primereact/inputtext';

import './draggableRecipe.css';

class DraggableRecipe extends Component {

    constructor(props) {
        super(props)
        this.state = {
            quantity: this.props.itemData.quantity ? this.props.itemData.quantity : '',
            active: false
        }
    }

    startDragHandler = (e) => {
        this.props.setDraggedItem({ ...this.props.itemData, quantity: this.state.quantity });
    }

    changeHandler = (e) => {
        e.preventDefault();
        this.setState({ quantity: e.target.value });
        this.props.changeHandler(this.props.itemData._id, { ...this.props.itemData, quantity: e.target.value });
    }

    render() {
        return (
            <div className="draggable-recipe-container" draggable={!this.state.active} onDragStart={this.startDragHandler}>
                <div className="draggable-recipe-name">
                    <h4>{this.props.itemData.name}</h4>
                </div>
                {this.props.inTarget && <div className="draggable-recipe-quantity">
                    <Inplace closable active={this.state.active} onToggle={(e) => this.setState({ active: e.value })}>
                        <InplaceDisplay>
                            {(this.state.quantity === '') ? 'Click to enter quantity' : this.state.quantity}
                        </InplaceDisplay>
                        <InplaceContent>
                            <InputText value={this.state.quantity} onChange={this.changeHandler} />
                        </InplaceContent>
                    </Inplace>
                </div>}
            </div>
        );
    }
}

export default DraggableRecipe;