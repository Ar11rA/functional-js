setTimeout(function repeat(operation, num) {
      if (num <= 0) return
      operation()
      return repeat(operation, --num)
      }, 100);

      module.exports = repeat;  