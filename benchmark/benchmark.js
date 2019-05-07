'use strict';

const BenchmarkTester = require('benchmark-tester');

new BenchmarkTester()
  .addTest('@fav/text.constant-case', (constantCase, data) => {
    return constantCase(data);
  })
  .addTest('constant-case', (constantCase, data) => {
    return constantCase(data);
  })
  .runTest('Empty string', '')
  .runTest('foo-bar', 'foo-bar')
  .runTest('fooBarBaz', 'fooBarBaz')
  .print();
