//template literal strings

let firstName = "James";
let lastName = "Handshoe";

//es6 way
console.log(`${firstName} has a funny last name of ${lastName}`);

//es5 way
console.log(firstName + " has a funny last name of " + lastName);

var a = 'hello';
var b = 'world';
var c = a + " " + b;
console.log(c);

let d = `hello ${b}`;
console.log(d)

let e = `${a} world`;
console.log(e);