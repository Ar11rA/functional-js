(function checkUsersValid(goodUsers) {
    console.log(function allUsersValid(submittedUsers) {
        var finalResult = false;
        finalResult = submittedUsers.every(function isValid(checkUser) {
            var validityOfUser = false;
            validityOfUser = goodUsers.some(function isPresent(okUser) {
                return okUser.id === checkUser.id;
            });
            return validityOfUser;
        });
        return finalResult;

    });
})();
module.exports = checkUsersValid

