import { Observable } from 'rxjs';


let circle = document.getElementById("circle");
let source = Observable.fromEvent(document, "mousemove")
    .map((event: MouseEvent) => {
        return {
            x: event.clientX,
            y: event.clientY
        }
    }).delay(300);

function onNext(value) {
    //console.log(value);
    //need to add px if !DOCTYPE HTML is present on index.html
    circle.style.top = `${value.y}`;
    circle.style.left = `${value.x}`;
}
source.subscribe(
    value => onNext(value),
    error => console.log(`Error: ${error}`),
    () => console.log(`Complete`)
);


