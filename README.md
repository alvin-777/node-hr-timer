# node-hr-timer
A high resolution timer that wraps Nodejs process.hrtime()

## ~~Installation (not yet)~~

```sh
npm install --save node-hr-timer
```

## Usage

```js
var HRTimer = require('node-hr-timer');
var timer = new HRTimer();
console.log(timer);
```

## API

### `timer.restart()`

Restarts the timer.

### `timer.getElapsed()`

Returns the elapsed time since the timer is constructed or restarted.

### `timer.toString()`

Returns the string representation of elapsed time.

### `Timer.profile(func, n)` _(Static)_

Returns the time cost to execute `func` *n* times.
