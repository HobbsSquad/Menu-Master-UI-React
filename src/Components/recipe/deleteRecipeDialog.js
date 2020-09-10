import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dialog } from 'primereact/dialog';

import { deleteRecipe } from '../../Redux/actions/recipe';

class DeleteRecipeItemDialog extends Component {

    submitButtonHandler = () => {
        this.props.deleteRecipe(this.props.currentRecipe._id);
        this.props.cancel();
    }

    render() {
        return (
            <div open className="delete-recipe-dialog-container">
                <Dialog header="Are you sure?" visible={this.props.visible} onHide={() => this.props.cancel()}>
                    <div className="delete-recipe-dialog-body">
                        <input type="button" onClick={this.submitButtonHandler} value="Delete" />
                    </div>
                </Dialog>
            </div>
        );
    }
}

const mapDispatchToProps = {
    deleteRecipe
}

const mapStateToProps = state => ({
    currentRecipe: state.recipe.currentRecipe
})

export default connect(mapStateToProps, mapDispatchToProps)(DeleteRecipeItemDialog)