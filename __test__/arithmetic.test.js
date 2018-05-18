'use strict';

const mathObject = require('../lib/arithmetic.js');

describe('mathObject.add module', () => {

  it('should return null when passed non number', () => {

    const expected = null;

    const actual = mathObject.add;

    expect(actual).toBe(expected);
    
  });

  it('should return the sum of "a + b"', () => {

    expect(mathObject.add).toBe(3);
  });
});
