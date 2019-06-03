import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Progress, Radio } from "antd";
import { handleAddUserAnswer } from '../actions/questions';
import Nav from "./Nav";

class Poll extends Component {
  select = (e) => {
    const answerinfo = {
      authedUser: this.props.authedUser,
      qid: this.props.question.id,
      answer: e.target.value
    }
    this.props.dispatch(handleAddUserAnswer(answerinfo))
  }
  render() {
    const { author, answer, question } = this.props;
    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;
    const percentage = 100 / (optionOneVotes + optionTwoVotes);
    return (
      <>
      <Nav />
      <Card title={`${author.name} asks...`}>
        <img src={author.avatarURL} alt={author.name} />
        {!answer ?
          <>
          <Radio.Group>
          <Radio style={{ display: "block"}} value="optionOne" onClick={this.select}> { question.optionOne.text } </Radio>
          <Radio style={{ display: "block"}} value="optionTwo" onClick={this.select}> { question.optionTwo.text } </Radio>
          </Radio.Group>
          </>
            :
          <>
        <h1>Results</h1>
          <div className={answer.text === question.optionOne.text ? 'selected' : 'not-selected'}>
            <p>Would you rather {question.optionOne.text}?</p>
            <p>{optionOneVotes} out of {optionOneVotes + optionTwoVotes} votes</p>
            <Progress strokeWidth={50} strokeLinecap="square" percent={optionOneVotes * percentage} />
          </div>
          <div className={answer.text === question.optionTwo.text ? 'selected' : 'not-selected'}>
            <p>Would you rather {question.optionTwo.text}?</p>
            <p>{optionTwoVotes} out of {optionOneVotes + optionTwoVotes} votes</p>
            <Progress strokeWidth={50} strokeLinecap="square" percent={optionTwoVotes * percentage} />
          </div>
          </>
        }
      </Card>
      </>
    );
  }
}

const mapStateToProps = ({ questions, users, authedUser }, props) => {
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

export default connect(mapStateToProps)(Poll);
