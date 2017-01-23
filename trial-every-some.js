function isValid(checkUser){
  var validityOfUser = false;
  validityOfUser = goodUsers.some(isPresent);
  return validityOfUser;
}
function isPresent(validUser){
  return validUser.id === checkUser.id;
}

function checkUsersValid(goodUsers) {
    console.log(function allUsersValid(submittedUsers) {
        var finalResult = false;
        finalResult = submittedUsers.every(isValid)
        {
            validityOfUser = goodUsers.some(isPresent)
        }
        return finalResult;

    });
};
module.exports = checkUsersValid

