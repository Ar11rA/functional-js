function repeat(operation, num) {
  
  if (num <= 0) return
  setTimeout(operation, 50); 
  return repeat(operation, --num)
}


module.exports = repeat;  