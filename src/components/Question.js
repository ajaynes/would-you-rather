import React, { Component } from "react";
import { connect } from "react-redux";

class Question extends Component {
  render() {
    console.log(this.props);
    const { question } = this.props;
    return <div>{question.optionOne.text}</div>;
  }
}

const mapStateToProps = ({ questions }, { ids }) => {
  return {
    question: questions[ids]
  };
};
export default connect(mapStateToProps)(Question);
