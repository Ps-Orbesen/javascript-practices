// Write a JavaScript function that generates all combinations of a string.

// Create a function
function combinationOfString(str1) {
    // Create empty array
    let array1 = [];
        for (let x = 0, y = 1; x < str1.length; x=x+1,y=y+1) {
            array1[x] = str1.substring(x,y);
        }
    let combination = [];
    let temp = "";
    let slent = Math.pow(2, array1.length);

        for (let i = 0; i < slent; i=i+1) {
            temp = " ";
            for (let j = 0; j < array1.length; j = j+1) {
                if ((i & Math.pow(2,j))) {
                    temp += array1[j];

                }
            }
            if (temp !== " ") {
                combination.push(temp);
            }

        }

        console.log(combination.join("\n"));

}

combinationOfString("fond");