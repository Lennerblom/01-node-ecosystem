'use strice'

function greet(name) {
    return(`hello ${name}`);
    if(typeof name !== "string") {return undefined;};
}
greet();

module.exports = greet