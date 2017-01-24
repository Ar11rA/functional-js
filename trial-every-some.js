function checkGoodUser(allUsers, submittedUsers){
    var finalResult =false;
    finalResult = submittedUsers.every(function(everySubmittedUser){
        var intermedResult = allUsers.some(function(everyUser){
            return everyUser.id === everySubmittedUser.id;
        });
        return intermedResult;
    });
    return finalResult;
}
var goodUser = [{id:1}, {id:2}, {id:3}];
var subUser = [{id:3}, {id:2}];

console.log(checkGoodUser(goodUser,subUser));