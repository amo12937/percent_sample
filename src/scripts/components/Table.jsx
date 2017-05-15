"use strict";

import React from "react"
import CommaInput from "components/CommaInput"
import CommaText from "components/CommaText"
import PercentInput from "components/PercentInput"
import PercentText from "components/PercentText"
import SampleModel from "models/SampleModel"

export default class Table extends React.Component {
  constructor(props) {
    super(props);
    this.model = new SampleModel();
    this.state = this.getState();
    this.handleUpdateValue = this.handleUpdateValue.bind(this);
    this.handleUpdateRate = this.handleUpdateRate.bind(this);
  }

  getState() {
    return {
      model: this.model
    };
  }

  update() {
    this.setState(this.getState);
  }

  handleUpdateValue(v) {
    this.model.value = v;
    this.update();
  }

  handleUpdateRate(r) {
    this.model.rate = r;
    this.update();
  }

  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td>
              <CommaInput
                value={this.state.model.value}
                handleUpdate={this.handleUpdateValue}
              />
            </td>
            <td>
              {this.state.model.value}
            </td>
            <td>
              <PercentInput
                value={this.state.model.rate}
                handleUpdate={this.handleUpdateRate}
              />%
            </td>
            <td>
              <PercentText value={this.state.model.rate} />
            </td>
            <td>
              <CommaText value={this.state.model.amount()} />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

