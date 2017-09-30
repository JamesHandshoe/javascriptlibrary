/*
Closure according to Kyle Simpson:
Closure is when a functon 'remembers' its lexical scope
even when the function is executed outside that
lexical scope
*/

function foo() {
	var bar = "bar";

	function baz() {
		console.log(bar);
	}

	bam(baz);
}

function bam(baz) {
	baz();
}

foo();

console.log("=======================");
//this for loop will print 6 5 times.  bob() closes over i after it hits six
for (var i=1; i<=5; i++) {
	setTimeout(function bob() {
		console.log(`i: ${i}`);
	}, i*1000);
}

//solution to make this work.  Use an iffe
for (var i=1; i<=5; i++) {
	(function(i){
		setTimeout(function bob() {
			console.log(`i: ${i}`);
		}, i*1000);
	})(i);
}

//another solution is to use let
//binds and rebinds i for each loop iteration
for (let i=1; i<=5; i++) {
	setTimeout(function bob() {
		console.log(`i: ${i}`);
	}, i*1000);
}

//Classic Module Pattern
//outer function that is executed
//one or more inner functions that get returned
//outer function is the public api
//inner functions are the private methods
var foo = (function() {
	var o = { bar: "bar" };

	return {
		bar: function() {
			console.log(o.bar);
		}
	}
})();

foo.bar();

//Variation on Module pattern that returns multiple functions
var foo = (function() {
	var publicAPI = {
		bar: function() {
			console.log("Bar");
		},
		baz: function() {
			console.log("Baz");
		}
	}
	return publicAPI;
})();

foo.bar();
foo.baz();
