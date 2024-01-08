let score = "33abc";

// console.log(typeof score); // string

//--------Number Converstion--------------

let covertToNumber = Number("33"); // it will convert "33" into 33 means string to number
// console.log(typeof covertToNumber); // number



let weirdConverstion = Number(score);
// console.log(weirdConverstion) // Nan = Not a Number
// console.log(typeof weirdConverstion); // number

let covertNull = Number(null) // number;
// console.log(covertNull) //0
let convertUndefined = Number(undefined) // number
// console.log(convertUndefined); // NaN

//Number(boolean) if true then 1 and if false then 0



//---------Boolean Converstion-------------

let isLoggedIn = 1; // number

let booleanIsLoggedIn = Boolean(isLoggedIn); // number to boolean

// console.log(booleanIsLoggedIn); // true  hut if isLoggedIn = 0 then false

// console.log(Boolean(null)); // false 

// console.log(Boolean(undefined)) // false

/* 
    "" ==> false;
    "abc" ==> true

    1 means true
    O means false

*/

//-----------------String Converstion------------

let age = 18;

let strAge = String(age);

// console.log(typeof strAge); // string

// console.log(String(true)); // true but type is string

//String() function returns the same thing but it change the type of the value to string


//-------------------- Tricky Operations------------------------

// These are only for experiment but below codes are not good and readable code we should not write code like those

/*
console.log(1+ 1+ 3 + "2") // 52 - type is string (if our last input is string then js will treat other inputs as numbers untill it finds a string)

console.log("1" + 1 + 2) // 112 -type is string (if our first input is string then js will treat every input as a string)

console.log(+true) // 1 

console.log(+"") // 0 

*/

// --------------Prefix and Postfix-------------

//Prefix = ++x 
//If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.


let a = 3;
let b = ++a;
// console.table([`a=${a}` , `b=${b}`]) // a=4 and b=4; cause it is returning the value after incrementing


// Postfix = x++
//If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.

let x = 3;
let y = x++;
// console.table([`x=${x}` ,`y=${y}`]); // x = 4 but y =3; cause it is returning the value before incrementing

// same goes for decrement 

let someNumber = 100;
let i = 0;

for(i ; i<5 ; i++){
    console.log(someNumber++); // returns the value before increment
        // 1st iteration = 100; then 100+1=101
        // 2nd iteratin  = 101;
        // 3rd iteration = 102
        // 4th iteration = 103
        // 5th iteration = 104
}

for(i ; i<5 ; i++){
    console.log(++someNumber); // returns the value after increment means first of all it will increment the value to 100+1 = 101
        // 1st iteration = 101;
        // 2nd iteratin  = 102;
        // 3rd iteration = 103;
        // 4th iteration = 104;
        // 5th iteration = 105;
}




