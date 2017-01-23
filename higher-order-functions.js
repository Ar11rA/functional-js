module.exports = function callFunctionRepatedly(functionToBeCalled, numberOfTimes){
    for(var index = 0; index < numberOfTimes; index++){
        functionToBeCalled();
    }
}