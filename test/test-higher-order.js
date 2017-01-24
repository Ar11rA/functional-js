var assert = require('assert');
var highOrderFunction = require('../higher-order-functions');
var count = 0, numberOfTimes = 10;
function counter() {
    if(count < numberOfTimes)
        count++;
    else
        count = 0;
}
describe('Return the output of the function the number of times it is specified', function () {
    it('Should return munber of times a function is called ', function () {
        highOrderFunction(counter, numberOfTimes);
        assert.equal(count,numberOfTimes);
    });
});
