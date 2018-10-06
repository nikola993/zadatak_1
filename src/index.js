const functions = require('./functions.js');
const config = require('./config.js');

functions.random(config.random.min, config.random.max);
functions.minIntegerFromArray(config.minIntegerFromArray.array);
functions.minIntegerFromString(config.minIntegerFromString.string);
functions.concatStringsByLength(config.concatStringsByLength.arrayOfStrings, config.concatStringsByLength.type);
