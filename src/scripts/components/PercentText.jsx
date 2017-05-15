"use strict";

import React from "react"

export default class PercentText extends React.Component {
  percentValue(p) {
    return p == null ? "" : p * 100;
  }

  render() {
    var percentValue = this.percentValue(this.props.value);
    return (
      <span>{percentValue}</span>
    );
  }
}

