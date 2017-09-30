/* 
In es5 a developer has to set default parameters to avoid an undefined.
This default param helps establish predictable defaults. 
Defaults also help if all parameters aren't given in the function invocation. 
*/

//es5 default params
var person = function(name, height, hair, sex) {
	var name = name || "Rando";
	var height = height || 60;
	var hair = hair || "blonde";
	var sex = sex || "not given";

	return `${name} is ${height} inches tall, has hair the color of ${hair}, and sex is ${sex}`;
}

console.log("Defaults es5");
console.log(person());

console.log("es5 with parameters used");
console.log(person("James", 71.5, "blonde", "male"));


//es6 default params
var personTwo = function(name = "Rando", height = 60, hair = "blonde", sex = "not given") {
	return `${name} is ${height} inches tall, has hair the color of ${hair}, and sex is ${sex}`;
}

console.log("Defaults es6");
console.log(personTwo());
console.log(personTwo("James", 71.5, "blonde", "male"));

