var assert = require('assert');
var filterFunction = require('../basic-filter');
var messages = [
    { message: "aaaasdsdssxcxc ghvdghvajd as sahdbashjdbsa sadbsjahbdsajd sadsadsadasdsa sdghvdshjfdsdddaewfgydgsuyadgsduaygdsyaufgdsafsadf" },
    { message: "aaaasdsdssxcxc ghvdghvajd as " }

]
describe('Return an array', function () {
    it('Should filter for messages of less than 50 length ', function () {
        var resultArray = filterFunction(messages);
        assert.deepEqual(resultArray, ["aaaasdsdssxcxc ghvdghvajd as "]);
    });
});
