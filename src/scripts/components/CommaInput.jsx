"use strict";

import React from "react"

export default class CommaInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  commaValue(v) {
    return v == null ? "" : Math.round(v).toString().replace(/(\d)(?=(\d\d\d)+$)/g, "$1,");
  }

  handleChange(e) {
    var i = parseInt(e.target.value.replace(/,/g, ""));
    this.props.handleUpdate(isNaN(i) ? null : i);
  }

  render() {
    var commaValue = this.commaValue(this.props.value);
    return (
      <input type="text" value={commaValue} onChange={this.handleChange} />
    );
  }
}

