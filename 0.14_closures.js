//Closures

//1.  A closure gives you access to the variables set in a function
//    after the function has completed and returned.
//2.  Helps keep variables from getting pushed into global scope.
//3.  Degree of protection.  Variable can't be overwritten.

//I added a setter for birthday.
var james = {};

var setAge = function(myAge) {

	var birthday = "7/13/1980";
	return {
		getAge: function() {
			return myAge;
		},

		getBirthday: function() {
			return birthday;
		}, 

		setBirthday: function(newBirthday) {
			birthday = newBirthday;
			return birthday;
		}
	}
}
james.age = setAge(36);

console.log(james.age.getBirthday());
james.age.setBirthday("3/20/2009");
console.log(james.age.getBirthday());

var carter = {};
carter.age = setAge(4);
//when you run this carter's birthday is the same
//as james' but I created a function that
//can set the birthday.
console.log(carter.age.getBirthday());
carter.age.setBirthday("1/31/2013");
console.log(carter.age.getBirthday());

var clara = {};
clara.age = setAge(7);
clara.age.setBirthday("3/20/2009");
console.log(clara.age.getBirthday());