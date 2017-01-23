function arrayMap(arr, operation) {
    var finalAnswer = arr.reduce(function (prevVal, elem, index, array) {
        prevVal.push(operation(elem));
        return prevVal;
    }, []);
    return finalAnswer;
}
module.exports = arrayMap;