import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Button, Avatar, Col, Row } from "antd";
import { Link } from "react-router-dom";
class Question extends Component {
  render() {
    const { question, user } = this.props;
    return (
      <>
        <Card title={`${user.name} asks...`} style={{ marginBottom: 10 }}>
          <Row>
            <Col span={8}><Avatar src={user.avatarURL} size={85} style={{ border: "3px solid #1890ff" }} /></Col>
            <Col span={16}>
              <h4>Would you rather...</h4>
              <p>{question.optionOne.text} or...</p>
              <Link to={`/questions/${question.id}`}>
                <Button type="primary" ghost>View Poll</Button>
              </Link>
            </Col>
          </Row>
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
