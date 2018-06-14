"use strict"

require = require('esm')(module);
const check = require('./main.js').default;

const words = process.argv.slice(2);
check(words);
