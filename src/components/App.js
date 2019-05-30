import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import SignIn from "./SignIn";
import Dashboard from "./Dashboard";
import ExpandedQuestion from "./ExpandedQuestion";

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
            <Route path="/dashboard" component={Dashboard} />
            <Route
              path="/questions/:question_id"
              component={ExpandedQuestion}
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
