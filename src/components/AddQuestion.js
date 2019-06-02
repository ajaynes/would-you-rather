import React, { Component } from "react";
import { connect } from 'react-redux';
import Nav from "./Nav";

class AddQuestion extends Component {
  render() {
    return (
      <div>
      <Nav />
      Add A Question Here
      </div>
    )
  }
}

export default AddQuestion;
