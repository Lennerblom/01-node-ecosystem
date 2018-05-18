// Create a NodeJS module in the `lib` directory named `arithmetic.js`. This module exports an object and should have `add` and `sub` methods that implement addition and subtraction.
// * The `add` method should have a 2 parameters (airty of two)
//   * `if` either argument is a non-number the function should return `null`
//   * `else` return the sum of the 2 numbers
// * The `sub` method should have 2 parameters (airty of two)
//   * `if` either argument is a non-number the function should return `null`
//   * `else` return the second parameter subtracted from the first parameter
'use strict';


// module.exports = {add: () => null};
const mathObject = {

  add: (a,b) => {
    if((isNaN(a) || isNaN(b))) {
      return null;
    } else {
      return a + b;
    }
  },
  sub: (c,d) => {
    if((isNaN(c) || isNaN(d))) {
      return null;
    } else {
      return (c - d);
    }
  },
};

mathObject.add(1,2);
mathObject.sub(3-2);
module.exports = mathObject;