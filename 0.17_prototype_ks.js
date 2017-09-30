//Every single "object" is built by a constructor function
//Classical Object Oriented programming makes an instance and no connection to 
//the class that "stamped" out the instance
//JS Links to the prototype
//when something isn't found on the prototype chain JS traveses up until it finds it

function Foo(who) {
	this.me = who;
}

Foo.prototype.identify = function() {
	return `I am ${this.me}`;
}

Foo.prototype.speak = function() {
	console.log(`Hello ${this.identify()}.`)
}

var a1 = new Foo("a1");
a1.speak();

//objects linked example
function Bar(who) {
	Foo.call(this, who);
}

//could use new but doesn't have constructor or prototype
//object create does all of them
Bar.prototype = Object.create(Foo.prototype);

//this.idenfity() doesn't exist on Bar so delegation uses
//the prototype chain to find Foo and this is bound to the object
Bar.prototype.speak = function() {
	console.log(`Hello ${this.identify()}.`)
}

var b1 = new Bar("b1");
var b2 = new Bar("b2");

b1.speak();
b2.speak();

//Inheritance
//Classical inheritance is a copy down
//Delegation is a point up also known as Behavior Delegation

function Hello(greeting) {
	this.greeting = greeting
}

Hello.prototype.greet = function() {
	console.log(`${this.greeting} you joker`)
}

var yoyo = new Hello("YO YO");
yoyo.greet();

//Objects Linked to Objects Only
// function FooMan(who) {
// 	this.me = who;
// }

// FooMan.prototype.identify = function() {
// 	return `I'm ${this.me}`;
// }

// var Bar = Object.create(Foo.prototype);

// Bar.init = function(who) {
// 	Foo.call(this, who);
// }

// Bar.speak = function() {
// 	console.log(`Hello ${this.identify()}.`);
// }

// var b1 = Object.create(Bar);
// b1.init("b1");
// b1.speak();

//Better way to do OLOO

var Foo = {
	init: function(who) {
		this.me = who;
	},

	identify: function() {
		return `I am ${this.me}`;
	}
}

var Bar = Object.create(Foo);

Bar.speak = function() {
	console.log(`Hello ${this.identify()}.`);
}

var b1 = Object.create(Bar);
b1.init("b1");
b1.speak();