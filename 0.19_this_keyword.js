//implicit and default binding
function hey() {
	console.log(this.bar);
}

bar = "bar10";
var o2 = { bar: "bar2", hey: hey };
var o3 = { bar: "bar3", hey: hey };

//default binding of this keyword-4th on the list of asking where a function is called
hey() 
//implicit binding of this keyword-3rd on the list of asking where a func is called
//inside each of the objects below is a reference to the func hey
o2.hey() 
o3.hey()

var o1 = {
	bar: "bar1",
	foo: function() {
		console.log(this.bar);
	}
};

var o2 = { bar: "bar2", foo: o1.foo };

bar = "bar3";
var foo = o1.foo;
console.log("==========================")
o1.foo();
o2.foo();
foo();

//explicit binding 

console.log("===========================");
function hello() {
	console.log(this.bar);
}
bar = "Hello";
var objA = { bar: "Yo Yo Yo" };
var objB = { bar: "Holla Back Girl" };
hello();
hello.call(objA);
hello.apply(objB);
console.log("===========================");
function foyo(baz, bam) {
	console.log(this.bar + " " + baz + " " + bam);
}

var obj = { bar: "jojo" };
foyo = foyo.bind(obj);
foyo("bam", "baz");

//new keyword and binding of this
console.log("===========================");
function bam() {
	this.baz = "baz";
	console.log(`${this.bar} ${baz}`)
	return {
		hello: function() {
			console.log("HELLO");
		}
	}
}
bam(); //this.bar inside of bam will reference bar="hello" from above
//new keyword creates a new object
//object is linked to a different object
//gets bound as this keyword for the function call
//return this
var baz = new bam();
console.log(baz.baz);
baz.hello();

//binding rules when confused
/*
1. Was the function called with 'new'
2. Was the function called with call / apply / bind creating explicit this
3. Was the function called via a containing / owning object (implicit)
4. Default: global object
*/
