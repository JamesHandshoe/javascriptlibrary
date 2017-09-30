//These work the same way as arrays but instead
//the developer is unpacking properties and placing them
//into a variable.

let magician = {
	magical: true,
	power: 100
}

//Lines 13 is the same as 11/12
//It is a good idea to uncomment and demonstrate that to students.
// let magical = magician.magical;
// let power = magician.power;
let { magical, power } = magician;
console.log(magical, power);

let athlete = {
	basketballPlayer: true,
	salary: 12000000
}

let { basketballPlayer, salary } = athlete;
console.log(basketballPlayer, salary);