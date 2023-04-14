function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}

console.log(outside(5)(10));

function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}

console.log(addSquares(2, 3));
