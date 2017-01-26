chai = require('chai');
assert = chai.assert;
var doubleAll = require('../map.js');
describe('doubleAll function when given valid input', function () {
  it('should return an empty array when the input is an empty array', function () {
    assert.deepEqual(doubleAll([]), []);
  });
  it('should return an array with elements that are double of the original elements ', function () {
    assert.deepEqual(doubleAll([1, 2, 3]), [2, 4, 6]);
  });
  it('should return an array with elements that are double of the original elements ', function () {
    assert.deepEqual(doubleAll([1, -2, 3, 9]), [2, -4, 6, 18]);
  });
  it('should return an array with elements that are double of the original elements ', function () {
    assert.deepEqual(doubleAll([1.8, 2.4]), [3.6, 4.8]);
  });
});
describe('doubleAll when provided invalid array', function () {
  it('should return an error message if string is passed', function () {
    assert.equal(doubleAll('abc'), 'Please provide a valid input');
  });
  it('should return an error message if object is passed', function () {
    assert.equal(doubleAll({}), 'Please provide a valid input');
  });
  it('should return an error message if no arguments are passed', function () {
    assert.equal(doubleAll(), 'Please provide a valid input');
  });
  it('should return an error message if null is passed', function () {
    assert.equal(doubleAll(null), 'Please provide a valid input');
  });
  it('should return an error message if array is not a valid number array', function () {
    assert.equal(doubleAll(['a', 1, 2, 'sd']), 'Please provide a valid input');
  });
});