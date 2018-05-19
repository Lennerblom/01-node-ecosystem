'use strict';

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