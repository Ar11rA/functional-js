var index = 0;
function reduce(arr, operation, initial) {
    if (index === arr.length) {
        return initial;
    }
    operation(initial, arr[index], index, arr);
    index++;
    reduce(arr, operation, initial);
    return initial;
}
module.exports = reduce