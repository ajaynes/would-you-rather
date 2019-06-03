import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Button } from "antd";
import { Link } from "react-router-dom";
class Question extends Component {
  render() {
    const { question, user } = this.props;
    return (
      <>
      <Card title={`${user.name} asks...`}>
        <img src={user.avatarURL} alt={user.name} />
        <div>{question.optionOne.text} or...</div>
        <Link to={`/questions/${question.id}`}>
          <Button>View Poll</Button>
        </Link>
      </Card>
      </>
    );
  }
}

const mapStateToProps = ({ questions, users }, { ids }) => {
  const question = questions[ids];
  return {
    question,
    qid: question.ids,
    user: users[question.author]
  };
};
export default connect(mapStateToProps)(Question);
