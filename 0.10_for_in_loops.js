var footballTeam = "Packers";
//for (i = 0; i < footballTeam.length; i++)
// for (var letter in footballTeam) {
// 	console.log(footballTeam[letter]);
// }
console.log("---------");
//create a for in loop that prints each letter of your fav show
// var favShow = "This is us";
// for (var letter in favShow) {
// 	console.log(favShow[letter]);
// }

//create a for in loop for your favorite food
//then can you count each vowel that occurs in that food?
//1. we need a for in loops
//2. use a conditional to check if the letter at an index is a vowel
//3. ? == "a" || "e" || "i" || "o" || "u"
//4. vowelCount = 0

//TODO - play around with this to fix the logic of the conditional
var vowelCount = 0;
var favFood = "Aspen Creek's delicious blue cheese sirloin";
console.log(favFood.length);
for (letter in favFood) {
	if (favFood[letter].toLowerCase() === "a" || favFood[letter].toLowerCase() === "e" || favFood[letter].toLowerCase() === "i" || favFood[letter].toLowerCase() === "o" || favFood[letter].toLowerCase() === "u") {
		vowelCount++
	}
}
console.log("There are " + vowelCount + " vowels in " + favFood);