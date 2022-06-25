// Write a JavaScript program to display the current day and time
// ==================================================================


// get date
// declare variables
let today = new Date();
let day = today.getDay();

// create an array of dates
let week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"];

console.log("Today is: " + week[day] + ".")