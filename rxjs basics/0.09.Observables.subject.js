var Observable = require('@reactivex/rxjs').Observable;
var Subject = require('@reactivex/rxjs').Subject;

const subject = new Subject();

subject.subscribe(value => console.log(`Observer A: ${value}`));
subject.subscribe(value => console.log(`Observer B: ${value}`));

subject.next(1);
subject.next(2);