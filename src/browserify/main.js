const theFoo = require('./foo');

const helloMessage = theFoo.getHelloMessageFromFoo();

const result = `The message is: ${helloMessage}`;

console.log(result);