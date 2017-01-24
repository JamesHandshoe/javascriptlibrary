//JSON is an acronym for JavaScript Object Notation
//Nested arrays
var names = [["James", "Paul", "Cameron", "Chris"], ["Morgan", "Julie", "Abbey", "Brie"]];
// console.log(names[1][3])
var items = [
	{
		"id": 1,
		"name": "Green Door",
		"price": 12.50,
		"tags": ["home", "green", "vinyl"]
	},

	{
		"id": 2,
		"name": "Red Door",
		"price": 12.50,
		"tags": ["home", "red", "cheap wood"]
	},


	{
		"id": 3,
		"name": "Pink Door",
		"price": 12.50,
		"tags": ["home", "pink", "plastic"]
	}
];

// console.log(items)
console.log(items[0].tags[1]);

//can you create a for loop that console logs each object's name

for(var i = 0; i<items.length; i++){
	console.log(items[i].name);
}






