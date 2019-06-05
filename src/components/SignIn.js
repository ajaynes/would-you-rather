import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { Select, Form, Button, Card } from "antd";
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
    if (this.props.history.action === "REPLACE" && this.state.redirect === true) {
      return (
        <div>
          <h1>That Question was Not Found</h1>
          <Button type="primary"><Link to="/dashboard">Return to your dashboard</Link></Button>
        </div>
      )
    }
    if (this.state.redirect === true) {
      return <Redirect to="/dashboard" />;
    }

    const {users} = this.props;
    return (
      <Card style={{ backgroundColor: "#001529" }}>
        <h1 style={{ textAlign: "center", color: "white" }}>Would you rather?</h1>
        <Form onSubmit={this.handleSubmit}>
          <Select onChange={this.handleChange} defaultValue="Select a user to sign in" style={{ marginBottom: 25 }}>
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
    );
  }
}

const mapStateToProps = ({ users }) => {
  return { users };
};

export default connect(mapStateToProps)(SignIn);
