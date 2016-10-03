node-coverify-lcov
==================
[![coverify-lcov](https://nodei.co/npm/coverify-lcov.png?compact=true)](https://www.npmjs.com/package/coverify-lcov)

[![Known Vulnerabilities](https://snyk.io/test/github/rsp/node-coverify-lcov/badge.svg)](https://snyk.io/test/github/rsp/node-coverify-lcov)

This module converts the output of the excellent `coverify` module
into something similar to the `lcov.info` files that some tools
require.

Note: it may not work for most purposes as it uses only the line coverage.

The assumption behind this module is that the only relevant metric is
the line coverage. If the line coverage is 100% then the function
coverage is also 100%. If the line coverage is not 100% then it
doesn't matter whether the function coverage is 100% or not.

Because [test coverage is like the speed of light](https://twitter.com/pocztarski/status/783066202549682177):
99% is better than 98%, but even 99.999% is nothing compared to 100%.

Installation
------------
Install to use in your Node project, updating the development
dependencies in `package.json`:
```sh
npm install browserify coverify coverify-lcov --save-dev
```

Usage
-----
Run `coverify` with `browserify` and filter with `coverify-lcov`:
```sh
./node_modules/browserify/bin/cmd.js -t coverify test.js \
| node | ./node_modules/coverify-lcov/bin/cmd.js
```

Issues
------
For any bug reports or feature requests please
[post an issue on GitHub](https://github.com/rsp/node-coverify-lcov/issues).

Author
------
Rafał Pocztarski - [https://github.com/rsp](https://github.com/rsp)

License
-------
MIT License (Expat). See [LICENSE.md](LICENSE.md) for details.
