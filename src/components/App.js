import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import SignIn from "./SignIn";
import Dashboard from "./Dashboard";
import Poll from "./Poll";
import AddQuestion from "./AddQuestion";
import Leaderboard from "./Leaderboard";
import PrivateRoute from './PrivateRoute';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div style={{ margin: 20 }}>
      <Router>
        <>
          {this.props.loading === true
            ? null
            : <div>
              <Route exact path="/" component={SignIn} />
                <PrivateRoute path="/dashboard" component={Dashboard} />
                <PrivateRoute path="/questions/:question_id" component={Poll} />
                <PrivateRoute path="/new-question" component={AddQuestion} />
                <PrivateRoute path="/leaderboard" component={Leaderboard} />
            </div>}
          </>
        </Router>
      </div>
    );
  }
}

function mapStateToProps({ loadingBar }) {
  return {
    loading: loadingBar > 0
  }
}

export default connect(mapStateToProps)(App);
