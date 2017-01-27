var chai = require('chai');
var assert = chai.assert;
var checkUsersValid = require('../every-some.js');

describe('when valid input is given to the function', function () {

  it('should return true if the list of submitted users is a proper subset of valid users', function () {
    var validUsers = [{ id: 1 }, { id: 2 }, { id: 3 }];
    var submittedUsers = [{ id: 2 }, { id: 3 }];
    var intermediateFunction = checkUsersValid(validUsers);
    var finalResult = intermediateFunction(submittedUsers);
    assert.equal(finalResult, true);
  });

  it('should return true if the list of submitted users is a proper subset of valid users', function () {
    var validUsers = [{ id: 'abc' }, { id: 'cde' }, { id: 'efg' }];
    var submittedUsers = [{ id: 'efg' }, { id: 'cde' }];
    var intermediateFunction = checkUsersValid(validUsers);
    var finalResult = intermediateFunction(submittedUsers);
    assert.equal(finalResult, true);
  });

  it('should return false if the list of submitted users is not a proper subset of valid users', function () {
    var validUsers = [{ id: 1 }, { id: 2 }, { id: 3 }];
    var submittedUsers = [{ id: 'abc' }, { id: 'ghi' }];
    var intermediateFunction = checkUsersValid(validUsers);
    var finalResult = intermediateFunction(submittedUsers);
    assert.equal(finalResult, false);
  });

  it('should return false if the lists of users are not of same data types', function () {
    var validUsers = [{ id: 1 }, { id: 2 }, { id: 3 }];
    var submittedUsers = [{ id: 2 }, { id: 4 }];
    var intermediateFunction = checkUsersValid(validUsers);
    var finalResult = intermediateFunction(submittedUsers);
    assert.equal(finalResult, false);
  });

  it('should return false if the list of submitted users is bigger than the list of valid users', function () {
    var validUsers = [{ id: 1 }, { id: 2 }, { id: 3 }];
    var submittedUsers = [{ id: 2 }, { id: 4 }, { id: 6 }, { id: 7 }, { id: 9 }];
    var intermediateFunction = checkUsersValid(validUsers);
    var finalResult = intermediateFunction(submittedUsers);
    assert.equal(finalResult, false);
  });

  it('should return true if the lists have multiple similar ids and submitted users list has no other user', function () {
    var validUsers = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 2 }, { id: 3 }];
    var submittedUsers = [{ id: 2 }, { id: 3 }, { id: 3 }];
    var intermediateFunction = checkUsersValid(validUsers);
    var finalResult = intermediateFunction(submittedUsers);
    assert.equal(finalResult, true);
  });

  it('should return true if the both submitted and valid user lists are empty', function () {
    var validUsers = [];
    var submittedUsers = [];
    var intermediateFunction = checkUsersValid(validUsers);
    var finalResult = intermediateFunction(submittedUsers);
    assert.equal(finalResult, true);
  });

  it('should return true if the submitted users list is empty', function () {
    var validUsers = [{ id: 1 }, { id: 2 }, { id: 3 }];
    var submittedUsers = [];
    var intermediateFunction = checkUsersValid(validUsers);
    var finalResult = intermediateFunction(submittedUsers);
    assert.equal(finalResult, true);
  });

});

describe('when the input given to the function is not valid', function () {

  it('should return an appropriate error message if a string is passed as argument to the checkUsersValid function', function () {
    var validUsers = 'Gooduser';
    var intermediateFunction = checkUsersValid(validUsers);
    var errorMessage = 'The input, ' + (typeof goodusers) + ', provided is not a valid one. Please provide an array of objects with an attribute id. ';
    assert.equal(intermediateFunction, errorMessage);
  });

  it('should return an appropriate error message if a string is passed as argument to the return of checkUsersValid function', function () {
    var validUsers = [{ id: 1 }, { id: 2 }, { id: 3 }];
    var submittedUsers = 'submitted users';
    var intermediateFunction = checkUsersValid(validUsers);
    var finalResult = intermediateFunction(submittedUsers);
    var errorMessage = 'The input, ' + (typeof submittedUsers) + ', provided is not a valid one. Please provide an array of objects with an attribute id. ';
    assert.equal(finalResult, errorMessage);
  });

  it('should return an appropriate error message if a number is passed as argument to the checkUsersValid function', function () {
    var validUsers = 123456;
    var intermediateFunction = checkUsersValid(validUsers);
    var errorMessage = 'The input, ' + (typeof goodusers) + ', provided is not a valid one. Please provide an array of objects with an attribute id. ';
    assert.equal(intermediateFunction, errorMessage);
  });

  it('should return an appropriate error message if a number is passed as argument to the return of checkUsersValid function', function () {
    var validUsers = [{ id: 1 }, { id: 2 }, { id: 3 }];
    var submittedUsers = 123456;
    var intermediateFunction = checkUsersValid(validUsers);
    var finalResult = intermediateFunction(submittedUsers);
    var errorMessage = 'The input, ' + (typeof submittedUsers) + ', provided is not a valid one. Please provide an array of objects with an attribute id. ';
    assert.equal(finalResult, errorMessage);
  });

  it('should return an appropriate error message if an object is passed as argument to the return of checkUsersValid function', function () {
    var validUsers = [{ id: 1 }, { id: 2 }, { id: 3 }];
    var submittedUsers = {id: 2};
    var intermediateFunction = checkUsersValid(validUsers);
    var finalResult = intermediateFunction(submittedUsers);
    var errorMessage = 'The input, ' + (typeof submittedUsers) + ', provided is not a valid one. Please provide an array of objects with an attribute id. ';
    assert.equal(finalResult, errorMessage);
  });

  it('should return an appropriate error message if a number is passed as argument to the checkUsersValid function', function () {
    var validUsers = {};
    var intermediateFunction = checkUsersValid(validUsers);
    var errorMessage = 'The input, ' + (typeof goodusers) + ', provided is not a valid one. Please provide an array of objects with an attribute id. ';
    assert.equal(intermediateFunction, errorMessage);
  });

})