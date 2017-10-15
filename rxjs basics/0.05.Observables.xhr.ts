import { Observable } from 'rxjs';


let output = document.getElementById("output");
let button = document.getElementById("button");

let click = Observable.fromEvent(button, "click");

let load = (url: string) => {
    let xhr = new XMLHttpRequest();

    xhr.addEventListener("load", () => {
        let movies = JSON.parse(xhr.responseText);
        movies.forEach(movie => {
            let div = document.createElement("div");
            div.innerText = movie.title;
            output.appendChild(div);
        });
    });

    xhr.open("GET", url);
    xhr.send();
}

click.subscribe(
    value => load(`movies.json`),
    error => console.log(`Error: ${error}`),
    () => console.log(`Complete`)
);


