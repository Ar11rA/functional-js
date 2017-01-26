function doubleAllNumbers(numbers) {
  if (numbers instanceof Array) {
    var isValid = true;
    var doubledNumbers = numbers.map(function doubleNumbers(numberToDouble) {
      if (isNaN(numberToDouble)) {
        isValid = false;
      }
      return numberToDouble * 2;
    });
    if (isValid === false) {
      return "Please provide a valid input";
    }
    return doubledNumbers;
  }
  else
    return "Please provide a valid input";
}
module.exports = doubleAllNumbers;