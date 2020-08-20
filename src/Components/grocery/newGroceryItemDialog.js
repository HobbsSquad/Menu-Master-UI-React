import React, { Component } from 'react';

import { connect } from 'react-redux';

import { getIngredients, newIngredient } from '../../Redux/actions/grocery';

import './newGroceryItemDialog.css';

class NewGroceryItemDialog extends Component {

    constructor(props) {
        super(props)
        this.state = {
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

    submitButtonHandler = () => {
        this.props.newIngredient(this.state);
        this.props.cancel();
    }

    updateAttribute = (key, value) => {
        this.setState({...this.state, [key]: value});
    }

    render() {
        return (
            <dialog open className="new-gorcery-item-dialog-container">
                <div className="new-grocery-item-dialog-header">
                    <h2>New Grocery Item</h2>
                </div>
                <div className="new-grocery-item-dialog-body">
                    <label>Name</label><br />
                    <input type="text" name="itemName" value={this.state.name} onChange={(e) => this.updateAttribute("name", e.target.value)}/><br />
                    <label>Description</label><br />
                    <input type="text" name="itemDescription" value={this.state.description} onChange={(e) => this.updateAttribute("description", e.target.value)}/><br />
                    <label>Product Link</label><br />
                    <input type="text" name="itemProductLink" value={this.state.productLink} onChange={(e) => this.updateAttribute("productLink", e.target.value)}/><br />
                    <label>Image Link</label><br />
                    <input type="text" name="itemImageLink" value={this.state.imageLink} onChange={(e) => this.updateAttribute("imageLink", e.target.value)}/><br />
                    <label>Size</label><br />
                    <input type="text" name="itemSize" value={this.state.size} onChange={(e) => this.updateAttribute("size", e.target.value)}/><br />
                    <label>Price</label><br />
                    <input type="text" name="itemPrice" value={this.state.price} onChange={(e) => this.updateAttribute("price", e.target.value)}/><br />
                    <label>External Id</label><br />
                    <input type="text" name="itemExternalId" value={this.state.externalId} onChange={(e) => this.updateAttribute("externalId", e.target.value)}/><br />
                    <input type="button" onClick={() => this.props.cancel()} value="Cancel" />
                    <input type="button" onClick={this.submitButtonHandler} value="Submit" />
                </div>
            </dialog>
        );
    }
}

const mapDispatchToProps = {
    getIngredients,
    newIngredient
}

const mapStateToProps = state => ({
    ingredientsStatus: state.grocery.ingredientsStatus
})

export default connect(mapStateToProps, mapDispatchToProps)(NewGroceryItemDialog)