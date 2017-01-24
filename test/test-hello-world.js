var assert = require('assert');
var upperCaseFile = require('../Hello-world');
describe('Convert all lower letters to upper Case latters', function () {
  it('Should return all uppercase letters', function () {
    var testInput = 'abc';
    assert.equal('ABC', upperCaseFile(testInput));
  });
});
describe('Return upper Case latters as upper case only', function () {
  it('Should return all uppercase letters', function () {
    var testInput = 'ABC';
    assert.equal(upperCaseFile(testInput), 'ABC');
  });
});