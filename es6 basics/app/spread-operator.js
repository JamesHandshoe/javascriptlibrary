//spread operator - takes the array and spreads it out in the new context

let a = [7, 8, 9];
let b = [6, ...a, 10];

console.log(b);

function printNums(a, b, c) {
	console.log(a, b, c);
}

let numArray = [1, 2, 3];
printNums(...numArray);


// function print(...z) {
// 	console.log(z);
// }
print = (...z) => { console.log(z); }
print(1, 2, 4, 5, 6, 7);

