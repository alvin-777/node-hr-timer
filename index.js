
"use strict";

const _start = Symbol('Start time');

class Timer {
  constructor() {
    this.restart();
  }

  restart() {
    this[_start] = process.hrtime();
  }

  getElapsed() {
    return process.hrtime(this[_start]);
  }

  toString() {
    var t = this.getElapsed()
    return '' + t[0] + '.' + (t[1] + 1e9).toString().slice(1);
  }

  static profile(func, n) {
    let timer = new Timer();
    for (let i = 0; i < n; i++)
      func();
    return timer.toString();
  }
}

module.exports = Timer;
