'use strict';

const greet = require('../lib/greet.js');

describe('greet module', () => {

  it('should return null when passed non string', () => {

    const expected = null;

    const actual = greet(77);

    expect(actual).toBe(expected);
    
  });

  it('should return "hello (name)" when passed (name)', () => {

    const expected = `hello, Mike`;

    const actual = greet('Mike');

    expect(actual).toBe(expected);
  });
});
