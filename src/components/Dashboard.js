import React, { Component } from "react";
import { connect } from "react-redux";
import { Tabs } from "antd";
import Question from "./Question";

const TabPane = Tabs.TabPane;

class Dashboard extends Component {
  render() {
    console.log(this.props);
    const { questions, unansweredQuestions, answeredQuestions } = this.props;

    return (
      <div className="card-container">
        <Tabs defaultActiveKey="1" type="card">
          <TabPane tab="Unanswered Questions" key="1">
            {unansweredQuestions.map(id => (
              <Question key={id} ids={id} />
            ))}
          </TabPane>
          {/* <TabPane tab="Answered Questions" key="2">
            {answeredQuestions.map(question => {
              return (
                <Question
                  key={questions[question].id}
                  author={questions[question].author}
                  optionone={questions[question].optionOne}
                  optiontwo={questions[question].optionTwo}
                />
              );
            })}
          </TabPane> */}
        </Tabs>
      </div>
    );
  }
}

const mapStateToProps = ({ questions, authedUser }) => {
  const questionIds = Object.values(questions);
  const answered = questionIds.filter(
    question =>
      question.optionOne.votes.includes(authedUser) ||
      question.optionTwo.votes.includes(authedUser)
  );

  const unanswered = questionIds.filter(
    question =>
      !question.optionOne.votes.includes(authedUser) &&
      !question.optionTwo.votes.includes(authedUser)
  );

  return {
    unansweredQuestions: unanswered
      .sort((a, b) => b.timestamp - a.timestamp)
      .map(q => q.id),
    answeredQuestions: answered
      .sort((a, b) => b.timestamp - a.timestamp)
      .map(q => q.id),
    questions,
    authedUser
  };
};

export default connect(mapStateToProps)(Dashboard);
