var animal = {
	legNum: "",
	hair: "",
	weight: ""
}

var food = {
	carnivore: "",
	herbavore: ""
}

console.log(animal)
var bear = Object.assign(animal);
bear.legNum = 4;
bear.hair = "brown";
bear.weight = 500;
console.log(bear);
console.log(bear.__proto__);
var bear = Object.assign(food);
bear.carnivore = true;
bear.herbavore = true;
console.log(bear.carnivore);