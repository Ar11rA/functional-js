var assert = require('assert');
var filterFunction = require('../basic-filter');

describe('When input is valid, that is, an array of objects of string data type', function () {
  it('Should filter for messages of less than 50 length and return them in an array', function () {
    var messages1 = [
      { message: 'I like going out to parties with friends or watching TV.' },
      { message: 'I like going out.'}
    ];
    var resultArray = filterFunction(messages1);
    assert.deepEqual(resultArray, ["I like going out."]);
  });
  it('Should return an empty array if there are no messages of less than 50 length', function () {
    var messages2 = [
      { message: 'I like going out to parties with friends or watching TV.' },
      { message: 'I like going out to parties with friends or watching TV.' }
    ];
    var resultArray = filterFunction(messages2);
    assert.deepEqual(resultArray, []);
  });
});

describe('When input is invalid, that is, if a string or an array or a number is passed as an argument',function(){
  it('Should return an error message if a string are passed', function () {
    var messages1 = 'I like going out';
    var resultArray = filterFunction(messages1);
    assert.deepEqual(resultArray, "Please provide a valid input.");
  });
  it('Should return an error message if a number are passed', function () {
    var messages1 = 12345;
    var resultArray = filterFunction(messages1);
    assert.deepEqual(resultArray, "Please provide a valid input.");
  });
  it('Should return an error message if an array is passed', function () {
    var messages1 = [1, 2, 3, 4, 5];
    var resultArray = filterFunction(messages1);
    assert.deepEqual(resultArray, []);
  });
});