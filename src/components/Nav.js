import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutAuthedUser } from "../actions/authedUser";

class Nav extends Component {
  handleLogout = () => {
    this.props.dispatch(logoutAuthedUser(this.props.authedUser));
  }
  render() {
    return (
      <nav>
        <Link to="/dashboard">Home</Link>
        <Link to="/new-question">Add a Question</Link>
        <Link to="/leaderboard">Leaderboard</Link>
        <Link to="/" onClick={this.handleLogout}>Sign Out</Link>
      </nav>
    )
  }
}

const mapStateToProps = ( authedUser ) => {
  return authedUser;
};

export default connect(mapStateToProps)(Nav);
