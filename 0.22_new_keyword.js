'use strict';

function Cat() {
	this.name = "Fluffster";
	this.color = "White";
}

//remember the new keyword sets the context of this
let cat = new Cat();

console.log(cat);
console.log(cat.name, cat.color);