//this is how to create a JS array
//             0         1        2       3       4 
var names = ["paul", "gavin", "verne", "lisa", "kenn"];
var nums = [1, 2, 3, 4, 5, 6, 4501];
var mixed = ["dog", false, 6, "squirrel", 2]
console.log(names[2]);
console.log(nums[6]);
console.log(mixed[3]);
//can we use a for in loop to iterate and console log each name in names
console.log(names);
for (name in names) {
	console.log(names[name]);
}
//create an array of your favorite candy bars
var favCandy = ["SPK", "Reese's Pieces", "Snickers", "PB cups", "Milk Duds"]
console.log(favCandy);
console.log(favCandy[1]);
//.push will add a new value to the end of the array
favCandy.push("Peanut Butter Cups");
console.log(favCandy);
//.pop will remove a value found at the end of the array
favCandy.pop();
console.log(favCandy);
console.log("------------------")
//.slice does not change the actual array but will only return the values up to the last number
console.log(favCandy.slice(0,3));
console.log(favCandy);
console.log("----------------------");

//how to remove a specific element of an array
//.indexOf will return the index of where a value is located in the array
console.log(favCandy.indexOf("SPK"));
//.splice will allow us to remove the item from the array 	
favCandy.splice(0,1);
console.log(favCandy);








