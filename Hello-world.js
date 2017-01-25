module.exports = function toUpperCaser(stringToConvert) {
    if (typeof stringToConvert !== 'string')
        return ('Please provide a valid input');
    else {
        var convertedString = stringToConvert.toUpperCase();
        return convertedString;
    }
}
