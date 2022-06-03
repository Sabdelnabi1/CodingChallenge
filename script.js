// Create a function that takes two dates and returns the number of days between the first and second date.

//Created two variables to make it easier. 
var d1 = new Date("06/01/2022");
var d2 = new Date("06/02/2022");

//created a funtion to input two perimeters.
//It then calculates the the number of milliseconds between the two
//Multiple it by all that so the number turns into a date and not a millisecond.
let myFunctionss = function (day2, day1) {
    let diff = d2.getTime() - d1.getTime();

    return diff / (1000 * 60 * 60 * 24)
}
console.log(myFunctionss(d2, d1))