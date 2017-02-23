let magician = {
	magical: true,
	power: 100
}

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