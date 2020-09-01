import React, { Component } from 'react';
import { Inplace, InplaceDisplay, InplaceContent } from 'primereact/inplace';
import { InputText } from 'primereact/inputtext';

import './draggableItem.css';

class DraggableItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            quantity: '',
            active: false
        }
    }


    startDragHandler = (e) => {
        this.props.setDraggedItem(this.props.itemData);
    }

    quantityToggleHandler = (e) => {
        if (!e.value) {
            this.props.changeQuantity(this.props.itemData._id, this.state.quantity);
        }
        this.setState({ active: e.value });
    }

    render() {
        return (
            <div className="draggable-item-container" draggable={!this.state.active} onDragStart={this.startDragHandler}>
                <div className="draggable-item-name">
                    <h4>{this.props.itemData.name}</h4>
                </div>
                {this.props.inTarget && <div className="draggable-item-quantity">
                    <Inplace closable active={this.state.active} onToggle={this.quantityToggleHandler}>
                        <InplaceDisplay>
                            {(this.state.quantity === '') ? 'Click to enter quantity' : this.state.quantity}
                        </InplaceDisplay>
                        <InplaceContent>
                            <InputText value={this.state.quantity} onChange={(e) => this.setState({ quantity: e.target.value })} />
                        </InplaceContent>
                    </Inplace>
                </div>}
            </div>
        );
    }
}

export default DraggableItem;