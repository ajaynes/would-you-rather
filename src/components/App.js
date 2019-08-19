import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import { Row, Col } from "antd";
import SignIn from "./SignIn";
import Dashboard from "./Dashboard";
import Poll from "./Poll";
import AddQuestion from "./AddQuestion";
import Leaderboard from "./Leaderboard";
import NotFound from "./NotFound";
import PrivateRoute from "./PrivateRoute";
import Nav from "./Nav";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        {this.props.authedUser === null ? <div>&nbsp;</div> : <Nav />}
        <Switch>
          <Route exact path="/" component={SignIn} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/questions/:question_id" component={Poll} />
          <PrivateRoute exact path="/add" component={AddQuestion} />
          <PrivateRoute exact path="/leaderboard" component={Leaderboard} />
          <PrivateRoute exact path="/NotFound" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    authedUser: state.authedUser
  };
};

export default connect(mapStateToProps)(App);
