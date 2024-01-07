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

console.log(String(true)); // true but type is string

//String() function returns the same thing but it change the type of the value to string