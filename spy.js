function Spy(target, method) {

    var spy = {
        count: 0
    };
    var originalMethod = target[method];
    target[method] = function () {
        spy.count++;
        return originalMethod.apply(target, arguments)
    }
    return spy;
}
//console.log(x.count);
module.exports = Spy;