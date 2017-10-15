var Observable = require('@reactivex/rxjs').Observable;

const foo = Observable.of(1, 2, 3, 4, 5);

foo.subscribe(
	x => {
		console.log("next", x);
		},
		
		err => {
			console.log('error', err);
		},

		() => {
			console.log('done');
		}
);

const multiplyByTen = (source) => {
	var result = Observable.create((observer) => {
		source.subscribe(
			(x) => { observer.next(x * 10); },
			(err) => { observer.error(err); },
			() => { observer.complete(); }
		)
	});
	return result;
}

console.log("=======Multiply by Ten!=============");

multiplyByTen(foo)
	.subscribe(
		(data) => {
			console.log(`Multiply ${data / 10} by ten equals: ${data}`);
		},

		(err) => {
			console.log('Error: ', err);
		},

		() => {
			console.log('Done!');
		}
	);