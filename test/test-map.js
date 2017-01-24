var assert = require('assert');
var mapFunction = require('../map.js');
describe('Return an array', function () {
    it('Should double each element of an array ', function () {
        var inputArray = [1, 2, 3];
        var resultArray = mapFunction(inputArray);
        assert.deepEqual(resultArray, [2, 4, 6]);
    });
});
