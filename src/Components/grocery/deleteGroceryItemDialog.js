import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dialog } from 'primereact/dialog';

import { deleteIngredient } from '../../Redux/actions/grocery';

class DeleteGroceryItemDialog extends Component {

    submitButtonHandler = () => {
        this.props.deleteIngredient(this.props.ingredient._id);
        this.props.cancel();
    }

    render() {
        return (
            <div open className="delete-gorcery-item-dialog-container">
                <Dialog header="Are you sure?" visible={this.props.visible} onHide={() => this.props.cancel()}>
                    <div className="update-grocery-item-dialog-body">
                        <input type="button" onClick={this.submitButtonHandler} value="Delete" />
                    </div>
                </Dialog>
            </div>
        );
    }
}

const mapDispatchToProps = {
    deleteIngredient
}

const mapStateToProps = state => ({
    ingredient: state.grocery.ingredient
})

export default connect(mapStateToProps, mapDispatchToProps)(DeleteGroceryItemDialog)