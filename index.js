
"use strict";

class Timer {
  constructor() {
    this.restart();
  }

  restart() {
    this._start = process.hrtime();
  }

  getElapsed() {
    return process.hrtime(this._start);
  }

  toString() {
    var t = this.getElapsed()
    return '' + t[0] + '.' + (t[1] + 1e9).toString().slice(1);
  }
}

module.exports = Timer;
