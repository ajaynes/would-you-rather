import React, { Component } from "react";
import { connect } from "react-redux";

class ExpandedQuestion extends Component {
  render() {
    console.log(this.props);
    return <div>This is a single question with the answers</div>;
  }
}

function mapStateToProps({ questions, users, authedUser }, props) {
  const id = props.match.params.question_id;
  const question = questions[id];
  const author = question.author;
  return {
    questions,
    users,
    authedUser,
    id,
    question,
    author: question.author
    //theanswer: users[authedUser].answers[id]
  };
}

export default connect(mapStateToProps)(ExpandedQuestion);
