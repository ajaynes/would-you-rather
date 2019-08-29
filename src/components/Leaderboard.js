import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Avatar, Col, Row } from "antd";

const { Meta } = Card;

class Leaderboard extends Component {
  render() {
    const { userOrder } = this.props;
    return (
      <Row type="flex" justify="center">
        <Col span={10}>
          {userOrder.map(user => {
            return (
              <Card key={user.id} style={{ margin: "5px 0" }}>
                <Row>
                  <Col span={8} style={{ textAlign: "center" }}>
                    <Avatar
                      src={user.avatar}
                      size={85}
                      style={{ border: "3px solid #1890ff" }}
                    />
                  </Col>
                  <Col span={16}>
                    <Meta
                      title={user.name}
                      description={`Total: ${user.total},  Asked: ${user.asked},  Answered: ${user.answer}`}
                    />
                  </Col>
                </Row>
              </Card>
            );
          })}
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ users }) => {
  const userOrder = Object.keys(users)
    .map(id => ({
      id,
      asked: users[id].questions.length,
      answer: Object.keys(users[id].answers).length,
      total: users[id].questions.length + Object.keys(users[id].answers).length,
      name: users[id].name,
      avatar: users[id].avatarURL
    }))
    .sort((a, b) => b.total - a.total);
  return {
    userOrder
  };
};

export default connect(mapStateToProps)(Leaderboard);
