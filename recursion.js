/*
Zero is even.

One is odd.

For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description.
The function should accept a single parameter (a positive, whole number)
and return a Boolean.
*/

function isEven (number){
    if (number < 0) {return console.log("Insert a positive integer number!")}
    if (number === 0) {return console.log(`${number} is even`)}
    if (number === 1) {return console.log(`${number} is odd`)}
    isEven(number - 2);
}

isEven(0);
isEven(1);
isEven(10);
isEven(-1);