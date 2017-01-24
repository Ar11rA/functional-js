function checkUsersValid(goodUsers, submittedUsers) {
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
module.exports = checkUsersValid

