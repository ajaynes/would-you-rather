import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { Select, Form, Button, Card, Row, Col } from "antd";
import { loginAuthedUser } from "../actions/authedUser";

const Option = Select.Option;

class SignIn extends Component {
  state = {
    user: "",
    redirect: false,
    disabled: true
  };
  handleChange = value => {
    this.setState({ user: value, disabled: false });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ redirect: true });
    this.props.dispatch(loginAuthedUser(this.state.user));
  };

  render() {
    /* if the property state is undefined in location is undefined, set it to an empty string to avoid errors */
    let redirectpath;
    try {
      redirectpath = this.props.location.state.from.pathname;
    } catch (error) {
      redirectpath = "";
    }

    if (redirectpath.includes("/questions") && this.state.redirect === true) {
      return <Redirect to="/404" />;
    }

    if (this.state.redirect === true) {
      return <Redirect to="/dashboard" />;
    }

    const { users } = this.props;
    return (
      <Row type="flex" justify="center">
        <Col span={6}>
          <Card style={{ backgroundColor: "#001529" }}>
            <h1 style={{ textAlign: "center", color: "white" }}>
              Would you rather?
            </h1>
            <Form onSubmit={this.handleSubmit}>
              <Select
                onChange={this.handleChange}
                defaultValue="Select a user to sign in"
                style={{ marginBottom: 25 }}
              >
                {Object.values(users).map(user => (
                  <Option key={user.id} value={user.id}>
                    {user.name}
                  </Option>
                ))}
              </Select>

              <Button
                type="primary"
                htmlType="submit"
                block
                disabled={this.state.disabled}
              >
                Sign In
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ users }) => {
  return { users };
};

export default connect(mapStateToProps)(SignIn);
