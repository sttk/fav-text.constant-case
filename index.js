'use strict';

var split = require('@fav/text.camel-case').split;

function constantCase(text) {
  return join(split(text));
}

function join(words) {
  if (!words.length) {
    return '';
  }

  var ret = String(words[0]).toUpperCase();

  for (var i = 1, n = words.length; i < n; i++) {
    ret += '_' + String(words[i]).toUpperCase();;
  }

  return ret;
}

Object.defineProperties(constantCase, {
  split: {
    enumerable: true,
    value: split,
  },
  join: {
    enumerable: true,
    value: join,
  },
});

module.exports = constantCase;
