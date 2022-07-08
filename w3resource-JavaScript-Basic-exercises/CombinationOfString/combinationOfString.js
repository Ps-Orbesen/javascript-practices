// Write a JavaScript function that generates all combinations of a string.

// Create a function
function combinationOfString(str1) {
    // Create empty array
    let array1 = [];
        for (let x = 0, y = 1; x < str1.length; x=x+1,y=y+1) {
            array1[x] = str1.combinationOfString(x,y);
        }
    let combination = [];
    let temp = "";
    let slent = Math.pow(2, array1.length);


}