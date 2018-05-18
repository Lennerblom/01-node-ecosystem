'use strict';
//import greet from '..lib/greet.js'; (need babl installed?)
const greet = require('../lib/greet.js');

describe('greet module', () => {

  it('should return null when passed non string', () => {

    const expected = null;

    const actual = greet(0);

    expect(actual).toBe(expected);
    
  });

  it('should return "hello (name)" when passed (name)', () => {

    const expected = `hello, Mike`;

    const actual = greet('Mike');

    expect(actual).toBe(expected);
  });
});
