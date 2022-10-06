const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// add event listener for the button
btn.addEventListener("click", function () {
    let hexColor = "#";

    // setup loop for the function
    for (let i = 0; i < 6; i = i+1) {
        hexColor += hex[getRandomNumber()];
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;

});