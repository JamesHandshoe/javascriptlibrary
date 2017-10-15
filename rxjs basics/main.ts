import { Observable } from 'rxjs';
import { load, loadWithFetch } from './loader';

let output = document.getElementById("output");
let button = document.getElementById("button");

let click = Observable.fromEvent(button, "click");

let renderMovies = (movies) => {
    movies.forEach(movie => {
        let div = document.createElement("div");
        div.innerText = movie.title;
        output.appendChild(div);
    });
}

let loadSubscription = load('movies.json')
    .subscribe(
        renderMovies,
        (error) => { console.log(`Error: ${error}`),
        () => { console.log(`Complete`) }
    });

console.log(loadSubscription);
loadSubscription.unsubscribe();

click.flatMap(event => loadWithFetch('movies.json'))
    .subscribe(
        (movies) => { renderMovies(movies) },
        (error) => { console.log(`Error: ${error}`) },
        () => { console.log(`Complete`) }
    );


