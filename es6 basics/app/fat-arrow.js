
//es5 way
/*
const addNums = function(numOne, numTwo) {
	return numOne + numTwo;
}

console.log(addNums(1,2));

const greeting = function(name) {
	return `Hey ${name}!  Hope your day is great!`
}

console.log(greeting("Paul"));

*/

//es6 way

const addNums = (numOne, numTwo) => {
	return numOne + numTwo;
}

console.log(addNums(1, 2));

const greeting = (name) => {
	return `Hey ${name}! Hope your day is great!`;
}

console.log(greeting("Paul"));