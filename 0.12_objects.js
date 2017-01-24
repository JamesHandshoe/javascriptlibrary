function Animal(name, habitat, food) {
	this.name = name,
	this.habitat = habitat,
	this.food = food
}

var bear = new Animal("bear", "woods", "salmon");
console.log(bear.__proto__);
Animal.prototype.color = "";
bear.color = "brown";
console.log(bear.name);
console.log(bear.color);
