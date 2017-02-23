let dog = {
	sound: "woof",
	speak: function() {
		console.log(this.sound);
	}
}

//simple example of binding
dog.speak();
let saySpeak = dog.speak;
var talk = saySpeak.bind(dog);
talk();
console.log(talk);

console.log("blah", this);