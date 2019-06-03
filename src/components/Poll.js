import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Progress, Radio, Col, Row, Avatar, Button } from "antd";
import { handleAddUserAnswer } from '../actions/questions';

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
    if (!question) {
      return <p>404: Question not found</p>
    }
    return (
      <>
        <Card title={`${author.name} asks...`} style={{ marginTop: 15 }}>
          <Row>
            <Col span={8}><Avatar src={author.avatarURL} size={85} style={{ border: "3px solid #1890ff" }} /></Col>
            <Col span={16}>
              {!answer ?
                <>
                  <h4>Would you rather...</h4>
                  <Radio.Group>
                    <Radio style={{ display: "block" }} value="optionOne" onClick={this.select}> {question.optionOne.text} </Radio>
                    <Radio style={{ display: "block" }} value="optionTwo" onClick={this.select}> {question.optionTwo.text} </Radio>
                  </Radio.Group>
                </>
                :
                <>
                  <h1>Results</h1>
                  <div className={answer.text === question.optionOne.text ? 'selected' : 'not-selected'}>
                    <p>Would you rather {question.optionOne.text}?</p>
                    <p>{optionOneVotes} out of {optionOneVotes + optionTwoVotes} votes</p>
                    <Progress strokeWidth={50} strokeLinecap="square" percent={(optionOneVotes * percentage).toFixed(0)} format={percent => `${percent}%`} />
                  </div>
                  <div className={answer.text === question.optionTwo.text ? 'selected' : 'not-selected'}>
                    <p>Would you rather {question.optionTwo.text}?</p>
                    <p>{optionTwoVotes} out of {optionOneVotes + optionTwoVotes} votes</p>
                    <Progress strokeWidth={50} strokeLinecap="square" percent={(optionTwoVotes * percentage).toFixed(0)} format={percent => `${percent}%`} />
                  </div>
                  <Button type="primary"><Link to="/dashboard">Go Back</Link></Button>
                </>
                }
            </Col>
          </Row>
        </Card>
      </>
          );
        }
      }
      
const mapStateToProps = ({questions, users, authedUser }, props) => {
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
