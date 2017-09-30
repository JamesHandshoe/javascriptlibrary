//Functional composition is a method of creating a new function
//by combining two or more other functions.  This is a concept that 
//is used widely in React and Redux

const addNums = (numOne, numTwo) => {
	return numOne + numTwo;
}

//The expected output here should be ten
console.log(addNums(5,5));

const multiplyNums = (numOne, numTwo) => {
	return numOne * numTwo;
}

//expected output here should be 25
console.log(multiplyNums(5,5));

//This is an example showing that the arguments for
//addNums can be a function and an actual number
console.log(addNums(multiplyNums(5, 5), 1));

const addOne = (num) => {
	return num + 1;
}

const timesTwo = (num) => {
	return num * 2;
}

const newFunc = (num) => {
	var newVal = addOne(1);
	var newVal = timesTwo(newVal);
	return newVal;
}

//expected outcome should be 4
//start with 1 and add 1
//newVal is now two and is reassigned with 2 * 2
console.log(newFunc(1));