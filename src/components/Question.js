import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Button } from "antd";

class Question extends Component {
  render() {
    console.log(this.props);
    const { question, user } = this.props;
    return (
      <Card title={`${user.name} asks...`}>
        <img src={user.avatarURL} alt={user.name} />
        <div>{question.optionOne.text}</div>
        <div>{question.optionTwo.text}</div>
        <Button value={question.id}>View Poll</Button>
      </Card>
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
