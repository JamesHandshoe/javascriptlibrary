var h = new Object(); // or just {}
h['one'] = 1;
h['two'] = 2;
h['three'] = 3;

// show the values stored
for (var k in h) {
    // use hasOwnProperty to filter out keys from the Object.prototype
    if (h.hasOwnProperty(k)) {
        console.log('key is: ' + k + ', value is: ' + h[k]);
    }
}

var acceptedNames = {};
acceptedNames['James'] = true;
acceptedNames['Jeremy'] = true;
acceptedNames['Jenny'] = true;
acceptedNames['Penelope'] = true;
acceptedNames['Quincy'] = false;
acceptedNames['Tom'] = true;
acceptedNames['Harry'] = false;

console.log(acceptedNames['James']);
let checkNames = (name) => {
	if (acceptedNames[name]) {
		return true;
	} 
	return false;
}

for (name in acceptedNames) {
	if (checkNames(name)) {
		console.log('Accepted person')
	} else {
		console.log('Unaccepted Person');
	}
}
