import { Observable, Observer } from 'rxjs';


//A way to emulate async behavior
let numbers = [1, 1, 2, 3, 5, 8, 13];
let source = Observable.create(observer => {
    let index = 0;
    let produceValue = () => {
        observer.next(numbers[index++]);

        if (index < numbers.length) {
            setTimeout(produceValue, 200);
        } else {
            observer.complete();
        }
    }

    produceValue();
}).map(n => n * 2)
  .filter(n => n > 4); 
//.map and filter are operators that can be attached to an observable
// - similar to array.prototype.map | .filter

source.subscribe(
    value => console.log(`Value: ${value}`),
    error => console.log(`Error: ${error}`),
    () => console.log(`Complete`)
);


