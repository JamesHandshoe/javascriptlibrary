
import { Observable } from 'rxjs';
import { load, loadWithFetch } from './loader';

// let source = Observable.create(observer => {
//     observer.next(1);
//     observer.next(2);
//     observer.error("stop");
//     observer.next(3);
//     observer.complete();
// });

//.merge allows us to merge a bunch of observables together
// can also add .catch to handle errors and also a new observable
let source = Observable.merge(
    Observable.of(1),
    Observable.from([2, 3, 4]),
    Observable.throw(new Error("stop!")),
    Observable.of(5)
).catch(error => {
    console.log(`Error: ${error}`);
    return Observable.of(10);    
});

//this observable uses onErrorResumeNext - skips over the error
// let source = Observable.onErrorResumeNext(
//     Observable.of(1),
//     Observable.from([2, 3, 4]),
//     Observable.throw(new Error("stop!")),
//     Observable.of(5)
// );

source.subscribe(
    (data) => { console.log(`Data: ${data}`)},
    (error) => { console.log("Error", error) },
    () => { console.log(`Complete`) }
)

// let output = document.getElementById("output");
// let button = document.getElementById("button");

// let click = Observable.fromEvent(button, "click");

// let renderMovies = (movies) => {
//     movies.forEach(movie => {
//         let div = document.createElement("div");
//         div.innerText = movie.title;
//         output.appendChild(div);
//     });
// }

// load('movies.json').subscribe(renderMovies);
// click.flatMap(event => loadWithFetch('movies.json'))
//     .subscribe(
//         (movies) => { renderMovies(movies) },
//         (error) => { console.log(`Error: ${error}`) },
//         () => { console.log(`Complete`) }
//     );


