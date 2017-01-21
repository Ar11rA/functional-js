 (function checkUsersValid(goodUsers) {
      console.log (function allUsersValid(submittedUsers) {
       var result = false;
       result = submittedUsers.every(function isValid(checkUser){
        var validity = false;
        validity = goodUsers.some(function isPresent(okUser){
            return okUser.id === checkUser.id;
        });
        return validity;
       });
      return result;
       
 });
})();
//module.exports = checkUsersValid

