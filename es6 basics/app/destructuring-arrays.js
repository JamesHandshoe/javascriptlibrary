//The destructuring of arrays allows a developer
//to unpack values from arrays and assign them to variables.
//This is used a lot with React / Redux applications

let numArray = [100, 200, 300];
//same as coding
//a = numArray[0]
//b = numArray[1]
//c = numArray[2]
let [a, b, c] = numArray;
console.log(a, b, c);

let singers = ["Beyonce", "Tupac", "Pitbull"];
let [awesome, legend, baller] = singers;
console.log(awesome, legend, baller);

let numbers = [100, 200, 300, 400, 500];
let [numOne, ...newNums] = numbers;

console.log(numOne, newNums);