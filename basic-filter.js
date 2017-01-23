function isShortMessage(obj) {
    return obj.message.length < 50;
}
function getShortMessages(messages) {
    var shortenedMessages = messages.filter(isShortMessage);
    var resultArray = shortenedMessages.map(function (element) {
        return element.message;
    })
    return resultArray;

}
module.exports = getShortMessages;
