'use strict';

const mathObject = require('../lib/arithmetic.js');

describe('mathObject.add module', () => {

  it('should return null when passed non number', () => {

    const expected = null;

    const actual = mathObject.add('four','five');

    expect(actual).toBe(expected);
    
  });

  it('should return the sum of "a + b"', () => {

    expect(mathObject.add(1,2)).toBe(3);
  });

  it('should return null when passed non number', () => {

    const expected = null;

    const actual = mathObject.sub('four','five');

    expect(actual).toBe(expected);
    
  });

  it('should return the value of "c - d"', () => {

    expect(mathObject.sub(3,2)).toBe(1);
  });
});
