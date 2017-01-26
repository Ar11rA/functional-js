function isShortMessage(obj) {
  if (obj instanceof Object) {
    if (obj.hasOwnProperty('message')) {
      return obj.message.length < 50;
    }
    else
      return false;
  }
  else {
    return false;
  }
}
function getShortMessages(messages) {
  var isValid = true;
  if (messages instanceof Array) {
    var shortenedMessages = messages.filter(isShortMessage);
    var resultArray = shortenedMessages.map(function (element) {
      if (!element.hasOwnProperty('message')) {
        isValid = false;
      }
      else
        return element.message;
    });
    if (isValid === true) {
      return resultArray;
    }
    else {
      return 'Please provide a valid input.';
    }
  }
  else {
    return 'Please provide a valid input.';
  }
}
module.exports = getShortMessages;
