import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dialog } from 'primereact/dialog';

import { updateIngredient } from '../../Redux/actions/grocery';

import './updateGroceryItemDialog.css';

class UpdateGroceryItemDialog extends Component {

    constructor(props) {
        super(props)
        this.state = {
            updatedItem: this.props.ingredient
        }
    }

    submitButtonHandler = () => {
        this.props.updateIngredient(this.state.updatedItem);
        this.props.cancel();
    }

    resetState = () => {
        this.setState({ updatedItem: this.props.ingredient });
    }

    updateAttribute = (key, value) => {
        this.setState({
            updatedItem: {
                ...this.state.updatedItem,
                [key]: value
            }
        });
    }

    render() {
        return (
            <div open className="update-grocery-item-dialog-container">
                <Dialog header="Update Grocery Item" visible={this.props.visible} onHide={() => this.props.cancel()} onShow={() => this.resetState()}>
                    <div className="update-grocery-item-dialog-body">
                        <label>Name</label><br />
                        <input type="text" name="itemName" value={this.state.updatedItem.name} onChange={(e) => this.updateAttribute("name", e.target.value)} /><br />
                        <label>Description</label><br />
                        <input type="text" name="itemDescription" value={this.state.updatedItem.description} onChange={(e) => this.updateAttribute("description", e.target.value)} /><br />
                        <label>Product Link</label><br />
                        <input type="text" name="itemProductLink" value={this.state.updatedItem.productLink} onChange={(e) => this.updateAttribute("productLink", e.target.value)} /><br />
                        <label>Image Link</label><br />
                        <input type="text" name="itemImageLink" value={this.state.updatedItem.imageLink} onChange={(e) => this.updateAttribute("imageLink", e.target.value)} /><br />
                        <label>Size</label><br />
                        <input type="text" name="itemSize" value={this.state.updatedItem.size} onChange={(e) => this.updateAttribute("size", e.target.value)} /><br />
                        <label>Price</label><br />
                        <input type="text" name="itemPrice" value={this.state.updatedItem.price} onChange={(e) => this.updateAttribute("price", e.target.value)} /><br />
                        <label>External Id</label><br />
                        <input type="text" name="itemExternalId" value={this.state.updatedItem.externalId} onChange={(e) => this.updateAttribute("externalId", e.target.value)} /><br />
                        <input type="button" onClick={this.submitButtonHandler} value="Submit" />
                    </div>
                </Dialog>
            </div>
        );
    }
}

const mapDispatchToProps = {
    updateIngredient
}

const mapStateToProps = state => ({
    ingredient: state.grocery.ingredient
})

export default connect(mapStateToProps, mapDispatchToProps)(UpdateGroceryItemDialog)