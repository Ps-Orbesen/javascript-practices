// Write a JavaScript program to calculate multiplication and division of two numbers (input from user).
// =======================================================================================================


// Create a function for multiplication

function multiplication()
{
    input1 = document.getElementById("num1").value;
    input2 = document.getElementById("num2").value;
    document.getElementById("result").innerHTML = input1 * input2;
}

// Create a function for Division

function division() {
    input1 = document.getElementById("num1").value;
    input2 = document.getElementById("num2").value;
    document.getElementById("result").innerHTML = input1 / input2;
}

// Create a function for Adding the number

function addNumber() {
    input1 = document.getElementById("num1").value;
    input2 = document.getElementById("num2").value;
    document.getElementById("result").innerHTML = input1 + input2;
}

// Create a function for subtracting the number

function subtractNumber() {
    input1 = document.getElementById("num1").value;
    input2 = document.getElementById("num2").value;
    document.getElementById("result").innerHTML = input1 - input2;
}

