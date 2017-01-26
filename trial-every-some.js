function checkGoodUser(allUsers, submittedUsers) {
    var finalResult = false;
    finalResult = submittedUsers.every(function (everySubmittedUser) {
        var intermedResult = allUsers.some(function (everyUser) {
            return everyUser.id === everySubmittedUser.id;
        });
        return intermedResult;
    });
    return finalResult;
}
//module.exports
var goodUser = [{id:1}, {id:2}, {id:3}];
var subUser = [{id:6}, {id:2}];
var finalAnswer = checkGoodUser(goodUser,subUser)
console.log(finalAnswer);