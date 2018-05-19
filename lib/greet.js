'use strice';

module.exports = greet;

function greet(name) {
  if(typeof name !== 'string') {
    return null;
  } else {
    return(`hello, ${name}`);
  }
}
greet('Mike');


