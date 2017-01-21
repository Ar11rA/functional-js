function countWords(inputWords) {
var countResult = inputWords.reduce(function frequency(allNames,name){
if (name in allNames){
    allNames[name]++;
}
    else
    allNames[name] = 1;

return allNames;
},{});
return countResult;
}

module.exports = countWords;