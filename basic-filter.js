function isShortMessage(obj){
    return obj.message.length < 50;
}
function getShortMessages(messages)
{
    var shortenedMessages = messages.filter(isShortMessage);
    var arr = shortenedMessages.map(function(element){
        return element.message;
    })
    return arr;

}
module.exports = getShortMessages;
