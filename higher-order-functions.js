module.exports = function callFunctionRepatedly(functionToBeCalled, numberOfTimes){
    if(functionToBeCalled instanceof Function){
    for(var index = 0; index < numberOfTimes; index++){
        functionToBeCalled();
    }
    }
    else{
        return('Provide a valid function');
    }
}