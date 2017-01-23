var slice = Array.prototype.slice

function logger(namespace) {
  return function () {
    var ArrayOfStrings = slice.call(arguments);
    console.log.apply(null, [namespace].concat(ArrayOfStrings));
     //console.log(namespace + ' ' + ArrayOfStrings.join(' '))

  }

}
module.exports = logger;