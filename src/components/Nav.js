import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutAuthedUser } from "../actions/authedUser";
import { Menu, Avatar } from 'antd';

class Nav extends Component {
  state = {
    current: 'home',
  };

  handleLogout = () => {
    const { authedUser } = this.props;
    this.props.dispatch(logoutAuthedUser(authedUser));
  }

  handleClick = e => {
    this.setState({
      current: e.key,
    });
  };

  render() {
    const { user } = this.props;
    return (
      <>
        <Menu theme="dark" onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" style={{ textAlign: "center" }}>
          <Menu.Item key="home">
            <Link to="/dashboard">Home</Link>
          </Menu.Item>
          <Menu.Item key="add">
            <Link to="/add">New Question</Link>
          </Menu.Item>
          <Menu.Item key="leaderboard">
            <Link to="/leaderboard">Leaderboard</Link>
          </Menu.Item>
          <Menu.Item className="user-info" disabled style={{ marginLeft: 125 }}>
            Hello {user.name} 
            <Avatar src={user.avatarURL} style={{ border: "2px solid rgba(255, 255, 255, 0.65)", marginLeft: 5 }} />
          </Menu.Item>
          <Menu.Item key="logout">
            <Link to="/" onClick={this.handleLogout}>Sign Out</Link>
          </Menu.Item>
        </Menu>
      </>
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
