//IIFE - Immediately invoked functional expressions
//We create and use functional expressions all the time!

//create a function called greeting that takes a name 
//and console logs "Hello " + name
var greeting = function(name) {
	console.log("Hello " + name);
}("Brian");

var printValue = (function(value) {
	console.log(value);
})(189208);