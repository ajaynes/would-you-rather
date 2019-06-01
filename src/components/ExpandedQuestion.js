import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Progress } from "antd";

class ExpandedQuestion extends Component {
  render() {
    console.log(this.props);
    const { author, answer, question } = this.props;
    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;
    const percentage =
      100 / (optionOneVotes + optionTwoVotes);
    return (
      <Card title={`${author.name} asks...`}>
        <img src={author.avatarURL} alt={author.name} />
        <h1>Results</h1>
          <div className={answer.text === question.optionOne.text ? 'selected' : 'not-selected'}>
            <p>Would you rather {question.optionOne.text}?</p>
            <p>{optionOneVotes} out of {optionOneVotes + optionTwoVotes} votes</p>
            <p><Progress strokeWidth="50px" strokeLinecap="square" percent={optionOneVotes * percentage} /></p>
          </div>
          <div className={answer.text === question.optionTwo.text ? 'selected' : 'not-selected'}>
            <p>Would you rather {question.optionTwo.text}?</p>
            <p>{optionTwoVotes} out of {optionOneVotes + optionTwoVotes} votes</p>
            <p><Progress strokeWidth="50px" strokeLinecap="square" percent={optionTwoVotes * percentage} /></p>
          </div>
      </Card>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }, props) {
  const tempUser = "johndoe";
  const id = props.match.params.question_id;
  const question = questions[id];
  const answer = question[users[authedUser].answers[id]];
  const author = users[question.author];

  return {
    questions,
    users,
    authedUser,
    id,
    question,
    author,
    answer
  };
}

export default connect(mapStateToProps)(ExpandedQuestion);
