
function duckCount() {
    var valueArray = Array.prototype.slice.call(arguments);
    //var duckObj = arguments[valueArray[0]];
    //console.log(valueArray); 

        var countResult = valueArray.reduce(function countDucks(ctr, curr, currIndex, arr) {
        if ((Object.prototype.hasOwnProperty.call(valueArray[curr], 'quack')) === true)
            {ctr++;}
            curr++;

    }, 0);
    console.log(ctr);
    return ctr;
}

module.exports = duckCount;
