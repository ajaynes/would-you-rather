import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutAuthedUser } from "../actions/authedUser";

class Nav extends Component {

  handleLogout = () => {
    const { authedUser } = this.props;
    this.props.dispatch(logoutAuthedUser(authedUser));
  }
  render() {
    console.log(this.props)
    const { user } = this.props;
    return (
      <nav>
        <div>
          Hello {user.name}!
          <img src={user.avatarURL} alt={user.name} />
        </div>
        <Link to="/dashboard">Home</Link>
        <Link to="/add">Add a Question</Link>
        <Link to="/leaderboard">Leaderboard</Link>
        <Link to="/" onClick={this.handleLogout}>Sign Out</Link>
      </nav>
    )
  }
}

const mapStateToProps = ({ authedUser, users }) => {
  const user = users[authedUser];
  return {
    authedUser,
    user
  };
};

export default connect(mapStateToProps)(Nav);
