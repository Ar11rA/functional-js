function checkUsersValid(goodUsers) {
  if (goodUsers instanceof Array) {
    return function allUsersValid(submittedUsers) {
      if(submittedUsers instanceof Array){
      var finalResult = false;
      finalResult = submittedUsers.every(function isValid(checkUser) {
        var validityOfUser = false;
        validityOfUser = goodUsers.some(function isPresent(validUser) {
          return validUser.id === checkUser.id;
        });
        return validityOfUser;
      });
      return finalResult;
    }
    else{
      return 'The input, ' + (typeof submittedUsers) + ', provided is not a valid one. Please provide an array of objects with an attribute id. '
    }
    }
  }
   else{
      return 'The input, ' + (typeof goodusers) + ', provided is not a valid one. Please provide an array of objects with an attribute id. '
    }
}
module.exports = checkUsersValid

