"use strict";

export default class SampleModel {
  constructor() {
    this.value = 1234567;
    this.rate = 0.5;
  }

  amount() {
    return this.value * this.rate;
  }
}

