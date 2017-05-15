"use strict";

import React from "react"

export default class CommaText extends React.Component {
  commaValue(v) {
    return v == null ? "" : Math.round(v).toString().replace(/(\d)(?=(\d\d\d)+$)/g, "$1,");
  }

  render() {
    var commaValue = this.commaValue(this.props.value);
    return (
      <span>{commaValue}</span>
    );
  }
}

