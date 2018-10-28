function make(init) {
  let arr = [];
  arr = arr.concat(init);
  function f(...args) {
    if (typeof args[0] === 'function') {
      return arr.reduce(args[0]);
    }
    arr = arr.concat(args);
    return f;
  }
  return f;
}