people = [

	{name: "James", age: 37, id: '54BC'},
	{name: "jack", age: 3, id: '545C'},
	{name: "john", age: 52, id: '54BCE'},
	{name: "Jenny", age: 37, id: '543BC'},
	{name: "Paul", age: 40, id: '521BC'},
	{name: "Clara", age: 8, id: '52BC'},

];

function findPerson(peopleArray, id) {
	let foundPerson = peopleArray.filter(person => person.id === id);
	if (foundPerson[0]) {
		return foundPerson[0]
	} else {
		return "Person not found in this data!";
	}

}

let individual = findPerson(people, '52C');

console.log(individual);

people.map(person => {
	if (person.name.toLowerCase() === 'james') {
		console.log("What a jackass");
	} else {
		console.log("What a nice person");
	}
});
