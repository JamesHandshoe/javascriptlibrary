//Closures

//1.  A closure gives you access to the variables set in a function
//    after the function has completed and returned.
//2.  Helps keep variables from getting pushed into global scope.
//3.  Degree of protection.  Variable can't be overwritten.

var james = {};

var setAge = function(myAge) {

	var birthday = "7/13/1980";
	return {
		getAge: function() {
			return myAge;
		},

		getBirthday: function() {
			return birthday;
		}
	}
}
james.age = setAge(36);
console.log(james.age);
console.log(james.age.getAge());
console.log(james.age.birthday);
console.log(james.age.getBirthday());