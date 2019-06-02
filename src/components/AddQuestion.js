import React, { Component } from "react";
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import { handleAddQuestion } from '../actions/questions'
import Nav from "./Nav";

class AddQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    redirect: false
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const {optionOneText, optionTwoText} = this.state
    const {dispatch} = this.props
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
      <div>
      <Nav />

      <form onSubmit={this.handleSubmit}>
        <input type="text" name="optionOneText" onChange={this.handleChange} />
        <input type="text" name="optionTwoText" onChange={this.handleChange} />
        <button type="submit">Add</button>
      </form>

      </div>
    )
  }
}

export default connect()(AddQuestion);
