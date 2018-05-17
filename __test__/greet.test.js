'use strict';

const greet = require('../lib/greet.js');

describe('greet module', () => {

  it('should return null when passed non string', () => {

    expect(greet()).toBeNull();
  });

  it('should return "hello (name)" when passed (name)', () => {

    let expected = `hello ${name}`;

    let actual = greet('name');

    expect(actual).toBe();
  });
});
