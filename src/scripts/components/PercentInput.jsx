"use strict";

import React from "react"

export default class PercentInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  percentValue(p) {
    return p == null ? "" : p * 100;
  }

  handleChange(e) {
    var i = parseInt(e.target.value);
    this.props.handleUpdate(isNaN(i) ? null : i * 0.01);
  }

  render() {
    var percentValue = this.percentValue(this.props.value);
    return (
      <input type="text" value={percentValue} onChange={this.handleChange} />
    );
  }
}

