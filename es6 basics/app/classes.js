//use strict forces certain behaviors of JS development
//more info regarding use strict here:
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

//This is syntatic sugar and is similar to creating Objects with functions in es5
//One major difference is that functions are hoisted and classes are not.

class Drink {

  constructor (name, calories, sugars, taste) {
    this.name = name;
    this.calories = calories;
    this.sugars = sugars;
    this.taste = taste;
  }

  toString() {
    return `${this.name} has ${this.calories} calories and ${this.sugars} sugars but scores a ${this.taste} taste score`;
  }

  printInfo() {
    console.log(this.toString());
  }

}

const pepsi = new Drink("Pepsi", 165, 37, 10);
pepsi.printInfo();

const dietDew = new Drink("Diet Mountain Dew", 0, 0, 1000);
dietDew.printInfo();