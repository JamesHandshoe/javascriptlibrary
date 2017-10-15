import { Observable, Observer } from 'rxjs';

let numbers = [1, 1, 2, 3, 5, 8, 13];
let source = Observable.from(numbers);

//implementing Observer of type number forces us to use the 
//correct type and also to implement the next error and complete 
//correctly - this is the class process to implement observer.
class MyObserver implements Observer<number> {
    
    next(value) {
        console.log(`Value: ${value}`);
    }

    error(e) {
        console.log(`Error: ${e}`);
    }

    complete() {
        console.log(`Complete`);
    }
}

source.subscribe(new MyObserver());

//shorthand way to implement observer
console.log('Shorthand Subscribe for Observer');
source.subscribe(
    (value) => { console.log(`Value: ${value}`) },
    (error) => { console.log(`Error: ${error}`) },
    () => { console.log(`Complete`) }
);

//yet another way to handle an observable / observer
let secondSource = Observable.create(observer => {

    numbers.map(value => {
        observer.next(value);
    });

    observer.complete();
});

console.log("Another way to do observables")
secondSource.subscribe(
    value => console.log(`Value: ${value}`),
    e => console.log(`Error: ${e}`),
    () => console.log(`Complete`)
);
