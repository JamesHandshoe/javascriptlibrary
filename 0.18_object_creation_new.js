function Person(saying) {
	this.saying = saying;
}

Person.prototype.talk = function() {
	console.log("I say: " + this.saying);
}

var james = new Person("yo what's up");
james.talk();