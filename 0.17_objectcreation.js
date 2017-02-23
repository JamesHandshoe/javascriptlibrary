function Person(saying) {
	this.saying = saying;
}

Person.prototype.talk = function() {
	console.log("I say", this.saying);
}

const james = new Person("Hey, whaddup!");
james.talk();

//what does new do?
//new creates a new object
//new also looks at whatever new is called upon 
//it sets the prototype to that object
//looks at what we called new upon the constructor
//return the new object and set the prototype