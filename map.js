
function doubleAllNumbers(numbers){
var doubledNumbers = numbers.map(function doubleNumbers(numberToDouble){
   return numberToDouble * 2;
});
return doubledNumbers;    
}
module.exports = doubleAllNumbers;