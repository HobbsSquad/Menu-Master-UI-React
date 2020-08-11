import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import 'primereact/resources/themes/nova-colored/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import './App.css';

import AuthPage from './Pages/Auth';
import MenuPage from './Pages/Menu';
import GroceryPage from './Pages/Grocery';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            {this.props.token && <Redirect from="/auth" to="/menu" exact />}
            {!this.props.token && <Route path="/auth" component={AuthPage} />}
            {!this.props.token && <Redirect to="/auth" exact />}
            {<Route path="/menu" component={MenuPage} />}
            {<Route path="/grocery" component={GroceryPage} />}
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  token: state.auth.token
})

export default connect(mapStateToProps)(App)