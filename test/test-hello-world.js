chai = require('chai');
assert = chai.assert;
var upperCaser = require('../Hello-world.js');
describe('when the function upperCaser is given a valid input', function () {
  it('should return an empty string when the input is an empty string', function () {
    assert.equal(upperCaser(''), '');
  });
  it('should return an uppercase when the input is in lowercase', function () {
    assert.equal(upperCaser('abc'), 'abc'.toUpperCase());
  });
  it('should return an uppercase when the input is in upperrcase', function () {
    assert.equal(upperCaser('ABC'), 'ABC'.toUpperCase());
  });
});
describe('when provided invalid string', function () {
  it('should return an error if number is passed', function () {
    assert.equal(upperCaser(1), 'Please provide a valid input');
  });
  it('should return an error if object is passed', function () {
    assert.equal(upperCaser({}), 'Please provide a valid input');
  });
  it('should return an error if array is passed', function () {
    assert.equal(upperCaser([]), 'Please provide a valid input');
  });
  it('should return an error if array of characters is passed', function () {
    assert.equal(upperCaser(['a', 'b']), 'Please provide a valid input');
  });
  it('should return an error if no arguments are passed', function () {
    assert.equal(upperCaser(), 'Please provide a valid input');
  });
  it('should return an error if null is passed', function () {
    assert.equal(upperCaser(null), 'Please provide a valid input');
  });
});