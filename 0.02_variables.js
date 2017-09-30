/********Variables *******/
'use strict';
//this variable is a string type
var firstname = "James";
var lastname = "Handshoe"
var fullname = firstname + " " + lastname;

//concatenation (this is where you can build or combine strings)
console.log(firstname + lastname);
console.log(fullname);

// empty variables

//variable declaration
var num;
//variable assignment or initialization
var num = 2;
console.log(num);

//declare an empty string variable
var petsName = "";
petsName = "Jones the blind dog";
console.log(petsName);

//conventional variable namings
//camel case (petsName) - first word is lower cased the next words are upper
var packersScoreThisWeekend = 38;

//snake case - each word is connected with an _
var packers_score_from_last_weekend = 35;


//shorthand operators

var age = 40;
//reassigning variable
//age += 1 is the same as age = age + 1
console.log(age += 1);

//age = age / 2
console.log(age /= 2);

//age = age * 2
console.log(age *= 2);

//age = age - 1
console.log(age -= 1);


var foo = "bar";

function bar() {
	var foo = "baz";
}

function baz(foo) {
	foo = "yay";
	//bam = "Cheah";
}

console.log(foo);
bar()
console.log(foo);
baz("Hello");
console.log(foo);
//console.log(bam);

var functionTest = {
	printCheah: function() {
		return "cheah";
	}
}

console.log(functionTest.printCheah());


