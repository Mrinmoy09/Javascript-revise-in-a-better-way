// --------------Data Types Summary-----------------------

/* 
    -----Primitive Data Types-------
    1.String
    2.Number
    3.Boolean
    4.null
    5.undefined
    6.Symbol
    7.BigInt (any number greater then 2^53 is a bigInt)

    ------Reference(non primitive) Data Types-------
    1.Array
    2.Objects
    3.Functions


*/

const userName = "Mrinmoy" // String
const score = 33 // Number
let isLoggedIn = false // Boolean
let temp = null // null
let userEmail; // undefined

// Symbol Type - To create a unique type of value we use Symbol();

const userId = Symbol('123');
// console.log(userId); // Symbol(123)
const anotherId = Symbol('123');
// console.log(anotherId); // Symbol(123)

console.log(userId == anotherId) //false -- why false? There value is same but both are unique;

const fruits = ["Apple" , "Orange" , "Banana"] // Array
const user = {
    name:"Mrinmoy Arnob",
    email: "abc@gmail.com",
    id: 12345
} // Object

function callTheUser(){
    console.log(user);
} // Function
