// Write a JavaScript program to display the current day and time
// ==================================================================


// get day
// declare variables
let today = new Date();
let day = today.getDay();

// create an array of days
let week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"];

console.log("Today is: " + week[day] + ".")

// get time
// declare variables
let hour = today.getHours();
let min = today.getMinutes();
let sec = today.getSeconds();

let prepand = (hour >= 12)? " PM ":" AM ";
hour = (hour >= 12)? hour - 12:hour;

// After Noon 12:00 PM to 0:00 AM
if (hour === 0 && prepand === 'PM')
{
    if (min === 0 && sec === 0)
    {
        hour =12;
        prepand= ' Noon';
    }
    else {
        hour = 12;
        prepand= ' PM';
    }
}

// Before Noon 0:00 AM to 12:00 PM
if (hour === 0 && prepand === 'AM')
{
    if (min === 0 && sec === 0)
    {
        hour = 12;
        prepand = ' Midnight';
    }
    else {
        hour = 12;
        prepand=' AM';
    }
}

console.log(`Current Time : ${hour}:${min}:${sec}${prepand}, ${week[day]}`);

