import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dialog } from 'primereact/dialog';

import { newIngredient } from '../../Redux/actions/grocery';

import './newGroceryItemDialog.css';

class NewGroceryItemDialog extends Component {

    constructor(props) {
        super(props)
        this.state = {
            newItem: {
                name: '',
                description: '',
                productLink: '',
                imageLink: '',
                size: '',
                price: '',
                externalId: '',
                external: false
            }
        }
    }

    submitButtonHandler = () => {
        this.props.newIngredient(this.state.newItem);
        this.props.cancel();
    }

    resetState = () => {
        this.setState({
            newItem: {
                name: '',
                description: '',
                productLink: '',
                imageLink: '',
                size: '',
                price: '',
                externalId: '',
                external: false
            }
        });
    }

    updateAttribute = (key, value) => {
        this.setState({
            newItem: {
                ...this.state.newItem,
                [key]: value
            }
        });
    }

    render() {
        return (
            <div className="new-gorcery-item-dialog-container">
                <Dialog header="New Grocery Item" visible={this.props.visible} onHide={() => this.props.cancel()} onShow={() => this.resetState()}>
                    <div className="new-grocery-item-dialog-body">
                        <label>Name</label><br />
                        <input type="text" name="itemName" value={this.state.newItem.name} onChange={(e) => this.updateAttribute("name", e.target.value)} /><br />
                        <label>Description</label><br />
                        <input type="text" name="itemDescription" value={this.state.newItem.description} onChange={(e) => this.updateAttribute("description", e.target.value)} /><br />
                        <label>Product Link</label><br />
                        <input type="text" name="itemProductLink" value={this.state.newItem.productLink} onChange={(e) => this.updateAttribute("productLink", e.target.value)} /><br />
                        <label>Image Link</label><br />
                        <input type="text" name="itemImageLink" value={this.state.newItem.imageLink} onChange={(e) => this.updateAttribute("imageLink", e.target.value)} /><br />
                        <label>Size</label><br />
                        <input type="text" name="itemSize" value={this.state.newItem.size} onChange={(e) => this.updateAttribute("size", e.target.value)} /><br />
                        <label>Price</label><br />
                        <input type="text" name="itemPrice" value={this.state.newItem.price} onChange={(e) => this.updateAttribute("price", e.target.value)} /><br />
                        <label>External Id</label><br />
                        <input type="text" name="itemExternalId" value={this.state.newItem.externalId} onChange={(e) => this.updateAttribute("externalId", e.target.value)} /><br />
                        <input type="button" onClick={this.submitButtonHandler} value="Submit" />
                    </div>
                </Dialog>
            </div>
        );
    }
}

const mapDispatchToProps = {
    newIngredient
}

export default connect(null, mapDispatchToProps)(NewGroceryItemDialog)