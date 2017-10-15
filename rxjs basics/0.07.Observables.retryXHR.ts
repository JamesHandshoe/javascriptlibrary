import { Observable } from 'rxjs';


let output = document.getElementById("output");
let button = document.getElementById("button");

let click = Observable.fromEvent(button, "click");

let load = (url: string) => {
    return Observable.create(observer => {
        let xhr = new XMLHttpRequest();        
        xhr.addEventListener("load", () => {
            if (xhr.status === 200) {
                let data = JSON.parse(xhr.responseText);
                observer.next(data);
                observer.complete();
            } else {
                observer.error(xhr.statusText);
            }
        }); 
        xhr.open("GET", url);
        xhr.send();
    }).retryWhen(retryStrategy({ attempts: 3, delay: 1500 }));
}

let retryStrategy = ({ attempts = 4, delay = 1000}) => {
    return (errors) => {
        return errors
            .scan((acc, value) => {
                console.log(acc, value);
                return acc + 1;
            }, 0)
            .takeWhile(acc => acc < attempts)
            .delay(delay);
    }
}

let renderMovies = (movies) => {
    movies.forEach(movie => {
        let div = document.createElement("div");
        div.innerText = movie.title;
        output.appendChild(div);
    });
}

load('movies.json').subscribe(renderMovies);
click.flatMap(event => load('movies.json'))
    .subscribe(
        (movies) => { renderMovies(movies) },
        (error) => { console.log(`Error: ${error}`) },
        () => { console.log(`Complete`) }
    );


