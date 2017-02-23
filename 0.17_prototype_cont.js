//the prototype is a delegate
//it is not a new copy.
//if an object does not have a property or method
//attached javascript interpreter will look up the 
//prototype chain to try and find it.
function talk() {
	console.log(this);
	console.log(this.sound);
}

const animal = {
	talk: talk
}

const cat = {
	sound: "meow"
}

const dog = {
	sound: "woof"
}
talk();
//the left side of the dot operator becomes
//the context for the right side.
animal.talk();

//set the prototype of the cat to animal
Object.setPrototypeOf(cat, animal);
cat.talk()
Object.setPrototypeOf(dog, animal);
dog.talk();
console.log("cat proto", cat.__proto__);