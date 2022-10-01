const colors = ["green", "red", "rgba(133,122,200)", "#f15025"]

// Targeting buttons
const btn = document.getElementById('btn');
// Color span
const color = document.querySelector(".color");

// Add buttons event listener
btn.addEventListener('click', function (){
    // get random number between 0-3
    const randomNum = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNum];
    color.textContent = colors[randomNum];

});

// create a function get random number

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}