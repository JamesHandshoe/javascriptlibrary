const codes = {
	codeOne: 1,
	codeTwo: 2,
	codeThree: 3,
	codeFour: 4
}

for (let code in codes) {
	console.log(code);
	// then to get the value of the index
	console.log(codes[code]);
}