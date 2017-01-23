
function duckCount() {
    var valueArray = Array.prototype.slice.call(arguments);
    //var duckObj = arguments[valueArray[0]];
    //console.log(valueArray); 

    var duckList = valueArray.filter(function isDuck(element) {
        //console.log(element);
        var obj = arguments[valueArray[element]];
        //console.log(obj);   
        return ((Object.prototype.hasOwnProperty.call(obj, 'quack')) == true)

    });
    return duckList.length;
}
module.exports = duckCount;