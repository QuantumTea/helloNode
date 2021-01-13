function add(a, b) {
    return a + b;
  }

  function multiply(a, b) {
    return a * b;
  }

  function square(a) {
    return multiply(a, a);
  }

  function cube(a) {
    return Math.pow(a, 3);
  }

module.exports = {
    add,
    multiply,
    square,
    cube
  };
