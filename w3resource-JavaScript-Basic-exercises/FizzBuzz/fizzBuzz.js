// From https://flexiple.com/fizzbuzz-javascript/

// Question: print numbers from 1 to 100, but here’s the catch, multiple of three should print “Fizz”
// and similarly print “Buzz” for multiples of 5 and lastly print “FizzBuzz” for multiples of three and five.
// ================================================================================================================

// Solution:
// ================================================================================================================

//Create a function call fizzBuzz
function fizzBuzz () {
    // Iterate the function over a for loop from 1 to 100 by one step each time
    for (let i = 1; i < 101; i = i + 1) {
        // if the number is multiply of three print Fizz
        if (i % 3 === 0)
            console.log("Fizz")
        // if the number is multiply of five print Buzz
        else if (i % 5 === 0)
            console.log("Buzz")
        // if the number is multiply of three and five print FizzBuzz
        else if (i % 15 === 0)
            console.log("FizzBuzz")
        else
            console.log(i);
    }

}

console.log(fizzBuzz(12))



