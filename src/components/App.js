import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import { Row, Col } from 'antd';
import SignIn from "./SignIn";
import Dashboard from "./Dashboard";
import Poll from "./Poll";
import AddQuestion from "./AddQuestion";
import Leaderboard from "./Leaderboard";
import PrivateRoute from './PrivateRoute';
import Nav from "./Nav";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        {this.props.authedUser === null ? <div>&nbsp;</div> : <Nav />}
        <Row type="flex" justify="center">
          <Col span={6}>
            <Route exact path="/" component={SignIn} />
          </Col>
        </Row>
        <Row type="flex" justify="center">
          <Col span={8}>
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/questions/:question_id" component={Poll} />
            <PrivateRoute path="/add" component={AddQuestion} />
            <PrivateRoute path="/leaderboard" component={Leaderboard} />
          </Col>
        </Row>
      </Router >
    );
  }
}

const mapStateToProps = state => {
  return {
    authedUser: state.authedUser
  }
}

export default connect(mapStateToProps)(App);
