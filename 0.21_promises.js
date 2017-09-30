function getData(num) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(num);
		}, 1000);
	});
}

var x;

getData(10)
	.then(numOne => {
		x = 1 + numOne;
		return getData(30);
	})
	.then(numTwo => {
		var y = 1 + numTwo;
		return getData("Meaning of life: " + (x + y));
	})
	.then(answer => {
		console.log(answer);
	})