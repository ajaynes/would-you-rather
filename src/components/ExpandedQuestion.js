import React, { Component } from "react";
import { connect } from "react-redux";

class ExpandedQuestion extends Component {
  render() {
    console.log(this.props);
    const { author, answer, question } = this.props;
    const percentage =
      100 / (question.optionOne.votes.length + question.optionTwo.votes.length);
    return (
      <>
        <div className="author-stuff">
          <div>
            Author Avatar:
            <img src={author.avatarURL} alt={author.name} />
          </div>
          <div>Author: {author.name}</div>
        </div>
        <div className="question-details">
          <p>Option 1 {question.optionOne.text}</p>
          <p>option 1 votes: {question.optionOne.votes.length}</p>
          <p>
            option 1 percentage: {question.optionOne.votes.length * percentage}
          </p>
          <p>Option 2 {question.optionTwo.text}</p>
          <p>option 2 votes: {question.optionTwo.votes.length}</p>
          <p>
            option 2 percentage: {question.optionTwo.votes.length * percentage}
          </p>
        </div>
        <div className="user-answer">user's answer: {answer.text}</div>
      </>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }, props) {
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
