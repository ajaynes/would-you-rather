import React, { Component } from "react";
import { connect } from 'react-redux';
import Nav from "./Nav";

class Leaderboard extends Component {
  render() {
    const { userOrder } = this.props;
    return (
      <div>
      <Nav />
        {userOrder.map(user => {
          return (
            <div key={user.id}>
              <img src={user.avatar} alt={user.name} />
              <p>{user.name}</p>
              <p>total score: {user.name}</p>
              <p>asked: {user.asked}</p>
              <p>answered: {user.answer}</p>
            </div>)
        })}
       </div>
    )
  }
}

function mapStateToProps ({ users }) {
  const userOrder = Object.keys(users).map(id => ({
    id,
    asked: users[id].questions.length,
    answer: Object.keys(users[id].answers).length,
    total: users[id].questions.length +  Object.keys(users[id].answers).length,
    name: users[id].name,
    avatar: users[id].avatarURL
  })).sort((a, b) =>  b.total - a.total)
  return {
    userOrder
  }
}

export default connect (mapStateToProps)(Leaderboard);
