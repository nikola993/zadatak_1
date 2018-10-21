const functions = require('./functions.js');
const config = require('./config.js');

const { random } = functions;
const { min } = config.random;
const { max } = config.random;
console.log(random(min, max));

const { minIntegerFromArray } = functions;
const { array } = config.minIntegerFromArray;
console.log(minIntegerFromArray(array));

const { minIntegerFromString } = functions;
const { string } = config.minIntegerFromString;
console.log(minIntegerFromString(string));

const { concatStringsByLength } = functions;
const { arrayOfStrings } = config.concatStringsByLength;
const { type } = config.concatStringsByLength;
console.log(concatStringsByLength(arrayOfStrings, type));
