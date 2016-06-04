/* global describe it */

var should = require('should'),
    greeter = require('../src/typescript/tsCode.js');

should = should || 'There\'s got to be a better way to silence eslint whinging that should is never used.';
//should.equal(1); //TODO: Got to be a better way to silence eslint whinging that should is never used.

describe('TypeScript is compiled ok', function () {
    it('when this passed', function () {
        var g = new greeter();
        g.greet('Yoda').should.equal('A type-scripting greeting to you, Yoda');
    });
});