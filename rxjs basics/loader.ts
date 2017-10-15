import { Observable } from "rxjs";


export let load = (url: string) => {
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

export let loadWithFetch = (url: string): Observable<JSON> => {
    //makes the fromPromise observable only fire off when subscribed to.
    return Observable.defer(() => {
        return Observable.fromPromise(fetch(url)
            .then( (response) => { return response.json() } ));
    });

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
