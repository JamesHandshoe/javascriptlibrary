/*
Prior to ES6 variables were declared with var and then initialized by assigning a value.
One major issue that occurs with using var is the variable is hoisted to a global scope.
As applications get more complex, minimizing global scope is important.

ES6 introduces 2 new ways to declare variables:
1. var (still the same concept)
2. let (this isolates the scope to the code block)
3. const (this creates a constant and will not allow re-assignment)

*/

//const is the easiest to understand - once declared cannot be changed.
//const firstName = "James";
//console.log(firstName);
//throws an error 
//var firstName = "Jimmy Boy";
//const firstName = "Jimmy Jack";

//This example will demonstrate difference between var and let.
//Even though this looks difficult start here first.

function sayFirstName() {
	var firstName = "James";
	if (true) {
		var firstName = "Jimmy Boy";
		console.log(firstName); //Jimmy Boy prints
	}
	console.log(firstName); //Jimmy Boy prints
}
sayFirstName();

function sayLastName() {
	let lastName = "ShoeBacca";
	if (true) {
		let lastName = "O'Con Con";
		console.log(lastName); //this lastName is scoped to the if block
	}
	console.log(lastName); //this lastName is scoped to the function block
}
sayLastName();

/* This is a great article to elaborate on the hoisting and scoping concepts */
/* https://scotch.io/tutorials/understanding-hoisting-in-javascript */
