var slice = Array.prototype.slice

function logger(namespace) {
  return function () {
    var arrayOfStrings = slice.call(arguments);
    var functionToBindStrings = console.log.bind(null);
    functionToBindStrings(namespace,arrayOfStrings.join(' '));
  }

}
module.exports = logger;