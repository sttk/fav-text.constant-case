# Benchmark test of @fav/text.constant-case

Comparing with following modules:

- [constant-case](https://www.npmjs.com/package/constant-case)

# v1.0.3

|              | @fav/text.constant-case(1.0.3) | constant-case(2.0.0) |
|:-------------|-------------------------------:|---------------------:|
| Empty string |             17,111,034 ops/sec |      721,612 ops/sec |
| foo-bar      |              2,244,735 ops/sec |      417,216 ops/sec |
| fooBarBaz    |                818,621 ops/sec |      349,541 ops/sec |

- Platform: Node.js 12.0.0 on Darwin 64-bit
- Machine: Intel(R) Core(TM) i7-2620M CPU @ 2.70GHz, 16GB


