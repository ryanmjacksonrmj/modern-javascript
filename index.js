var moment = require("moment");
var numeral = require('numeral');
console.log("Hello world!");
let date = moment().subtract(10, 'days').calendar();
console.log(date);
var number = numeral(1000);
console.log(number);

let myVar = 25;
console.log(myVar);

var numbers = [11, 5, 43];
let [a, b, c] = numbers;
console.log(numbers[2]);
