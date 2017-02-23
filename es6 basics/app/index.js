let a = "whadddup";
console.log(a);


//stand alone block of code because it isn't bound to a class or a function
//or an object
// {
// 	let a = "yo yo";
// 	console.log("scope", a);
// }

// //we can create stand alone blocks or scopes and these hide data
// //the salary variable is unavailable to the global scope
// {
// 	let salary = 65000;

// }

// console.log(salary);

//example of const
//we created a constant and that is read only..cannot be changed
//meaning we cannot reassign this variable.
const b = 4;
//b = 3*4;
console.log(b);

const names = ["James", "Paul", "Kenn"];
names.push("kenny g");
console.log(names);