const student = {
	name: 'James',
	age: 37,
	hair: true,
	'hair color': 'blond', // quote needed for spaced prop
	dimensions: {
		height: 75,
		weight: 210
	}
}

console.log(student['hair color']); // square brackets allow obtaining value
const studentTwo = student;

// true because it points to the same mem ref
console.log(student === studentTwo);
console.log(student.name, studentTwo.name);
// because the object referencs the same spot in mem
// changing one changes the other
studentTwo.name = "Jack";
console.log(student.name, studentTwo.name);

// to create a new clone
const studentThree = Object.assign({}, student);
console.log(student, studentThree);
studentThree['hair color'] = 'black';
// this will still reference the nested object
// for both student and studentThree
studentThree.dimensions.weight = 180;
console.log(student, studentThree);

// To create a deep copy completely independent use

const studentFour = JSON.parse(JSON.stringify(student));
console.log(student, studentFour);
studentFour.dimensions.height = 88;
student.dimensions.weight = 250;
console.log(student, studentFour);
