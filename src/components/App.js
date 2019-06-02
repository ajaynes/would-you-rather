import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import SignIn from "./SignIn";
import Dashboard from "./Dashboard";
import Poll from "./Poll";
import PrivateRoute from './PrivateRoute';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div style={{ margin: 20 }}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={SignIn} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute
              path="/questions/:question_id"
              component={Poll}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { state };
};

export default connect(mapStateToProps)(App);
