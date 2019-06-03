import React, { Component } from "react";
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import { handleAddQuestion } from '../actions/questions'
import { Form, Button, Card, Input } from "antd";

class AddQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    redirect: false,
    disabled: false
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { optionOneText, optionTwoText } = this.state
    const { dispatch } = this.props
    if (this.state.optionOneText === '' || this.state.optionTwoText === '') {
      this.setState({ disabled: true })
    }
    dispatch(handleAddQuestion(optionOneText, optionTwoText))
    this.setState({
      optionOneText: '',
      optionTwoText: '',
      redirect: true
    })
  }
  render() {
    if (this.state.redirect === true) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <Card title="Would you rather..." style={{ marginTop: 15 }}>
        <Form onSubmit={this.handleSubmit}>
          <Input placeholder="Add Option 1" type="text" name="optionOneText" onChange={this.handleChange} />
          <p style={{ textAlign: "center" }}>- OR -</p>
          <Input placeholder="Add Option 2" type="text" name="optionTwoText" onChange={this.handleChange} />
          <Button type="primary" htmlType="submit" style={{ marginTop: 20 }} disabled={this.state.disabled} block>Add Question</Button>
        </Form>
      </Card>
    )
  }
}

export default connect()(AddQuestion);
