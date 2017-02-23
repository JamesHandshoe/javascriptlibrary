console.log("Hello World");
console.log(1 + 2);
console.log(100 / 5);
console.log(5 % 2);

console.log(36);
console.log(1980);
console.log(1);
console.log(2);

console.log(5 % 2);
console.log(11 % 3);
console.log(30 % 18);

console.log(Math.pow(10,2));

function isRightTriangle(side, base, hypotenuse) {
	if ((side * side + base * base) == (hypotenuse * hypotenuse)) {
		return true;
	} else {
		return false;
	}
}

console.log(isRightTriangle(5,4,20));