import { Observable } from "rxjs";


export let load = (url: string) => {
    return Observable.create(observer => {
        let xhr = new XMLHttpRequest();    
        
        let onLoad = () => {
            if (xhr.status === 200) {
                let data = JSON.parse(xhr.responseText);
                observer.next(data);
                observer.complete();
            } else {
                observer.error(xhr.statusText);
            }
        }
        xhr.addEventListener("load", onLoad); 

        xhr.open("GET", url);
        xhr.send();

        return () => {
            xhr.removeEventListener("load", onLoad);
            xhr.abort();
        }
    }).retryWhen(retryStrategy({ attempts: 3, delay: 1500 }));
}

export let loadWithFetch = (url: string): Observable<JSON> => {
    //makes the fromPromise observable only fire off when subscribed to.
    return Observable.defer(() => {
        return Observable.fromPromise(
            fetch(url).then( 
                (response) => {
                    if (response.status === 200) {
                        return response.json() 
                    } else {
                        return Promise.reject(response);
                    }
                } 
            )
        );
    }).retryWhen(retryStrategy());

}

let retryStrategy = ({ attempts = 4, delay = 1000} = {}) => {
    return (errors) => {
        return errors
            .scan((acc, value) => {
                acc += 1;
                if (acc < attempts) {
                    return acc;
                } else {
                    throw new Error(value);
                }
            }, 0)
            //.takeWhile(acc => acc < attempts)
            .delay(delay);
    }
}
