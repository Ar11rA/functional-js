
function doubleAllNumbers(numbers) {
  if (numbers instanceof Array) {
    var doubledNumbers = numbers.map(function doubleNumbers(numberToDouble) {
      return numberToDouble * 2;
    });
    return doubledNumbers;
  }
  else
    return "Please provide a valid input";

}
module.exports = doubleAllNumbers;