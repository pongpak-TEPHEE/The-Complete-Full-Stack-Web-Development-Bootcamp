// test sillyname
import generateName from 'sillyname'; // ESM (ECMAScript Modules) add "type": "module", in package.json
// var generateName = require('sillyname'); // CJS (command js)
var sillyName = generateName();

console.log(`My name is ${sillyName}.`);

