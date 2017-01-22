var index = 0;
function reduce(arr, fn, initial) {
if(index === arr.length){
    return initial;
}
fn(initial,arr[index],index,arr);
index++;
reduce(arr, fn, initial);
return initial;
      }
module.exports = reduce