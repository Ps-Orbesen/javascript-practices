// Write a JavaScript program to get the current date.
// ========================================================

// We want ot get current day/month/year

// declare variables
let today = new Date();
let currentDay = today.getDate();
let currentMonth = today.getMonth()+1; //getMonth return an integer(whole number) between 0 and 11
let currentYear = today.getFullYear();

console.log('Current Date : ' + `${currentMonth}/${currentDay}/${currentYear}`)