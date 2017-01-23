
function duckCount() {
    var valueArray = Array.prototype.slice.call(arguments);
    //var duckObj = arguments[valueArray[0]];
    //console.log(valueArray); 
    console.log(arguments);
    var duckList = valueArray.filter(function isDuck(element) {
        //console.log(element);
        //console.log(obj);   
        return ((Object.prototype.hasOwnProperty.call(element, 'quack')) === true)

    });
    return duckList.length;
}
module.exports = duckCount;