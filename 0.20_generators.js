//generators can pause with yield and resume with .next()
function* gen() {
	console.log("hello");
	yield null;
	console.log('world');
}

var it = gen();
it.next();
it.next();

//coroutine example

function coroutine(g) {
	var it = g();
	return function() {
		return it.next.apply(it, arguments);
	}
}

var runNew = coroutine(function*(){
	var x = 1 + (yield null);
	var y = 1 + (yield null);
	yield (x + y);
});

console.log("===================");
runNew();
runNew(10);
console.log("Meaning of life: " + runNew(30).value);


console.log("===================");

function getData(d) {
	setTimeout(function(){ run(d); }, 1000);
}

var run = coroutine(function*() {
	var x = 1 + (yield getData(10));
	var y = 1 + (yield getData(30));

	var answer = (yield getData(
		`Meaning of Life: ${x + y}`
	));
	console.log(answer);
});

run();
