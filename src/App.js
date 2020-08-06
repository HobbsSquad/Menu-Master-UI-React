import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import 'primereact/resources/themes/nova-colored/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import './App.css';

import AuthPage from './Pages/Auth';
import MenuPage from './Pages/Menu';

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
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  userStatus: state.auth.userStatus,
  userId: state.auth.userId,
  token: state.auth.token,
  tokenExpiration: state.auth.tokenExpiration
})

export default connect(mapStateToProps)(App)