'use strice';

module.exports = greet;

function greet(name) {
  if(typeof name !== 'string') return null;
  return(`hello, ${name}`);
}
greet('Mike');
greet();

