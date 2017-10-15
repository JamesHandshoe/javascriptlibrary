import { Observable } from 'rxjs';


let output = document.getElementById("output");
let button = document.getElementById("button");

let click = Observable.fromEvent(button, "click");

let load = (url: string) => {
    return Observable.create(observer => {
        let xhr = new XMLHttpRequest();        
        xhr.addEventListener("load", () => {
            let data = JSON.parse(xhr.responseText);
            observer.next(data);
            observer.complete();
        });
    
        xhr.open("GET", url);
        xhr.send();
    });
}

let renderMovies = (movies) => {
    movies.forEach(movie => {
        let div = document.createElement("div");
        div.innerText = movie.title;
        output.appendChild(div);
    });
}

//This method works but typically using a subscribe
//inside of a subscribe indicates there is a better way
// click.subscribe(
//     value => load(`movies.json`)
//         .subscribe(data => renderMovies(data)),
//     error => console.log(`Error: ${error}`),
//     () => console.log(`Complete`)
// );

click.flatMap(event => load('movies.json'))
    .subscribe(
        (movies) => { renderMovies(movies) },
        (error) => { console.log(`Error: ${error}`) },
        () => { console.log(`Complete`) }
    );


