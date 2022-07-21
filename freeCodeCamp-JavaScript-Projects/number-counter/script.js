
// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        console.log(e.currentTarget.classList);
    });
});

console.log("hello")