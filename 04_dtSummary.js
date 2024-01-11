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

// console.log(userId == anotherId) //false -- why false? There value is same but both are unique;

const fruits = ["Apple" , "Orange" , "Banana"] // Array
const user = {
    name:"Mrinmoy Arnob",
    email: "abc@gmail.com",
    id: 12345
} // Object

function callTheUser(){
    // console.log(user);
} // Function


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/* 
----------------------------Stack and Heap memory---------------------------------------

Primitive Data Types - Stack Memory
Non-primitive data types - Heap memory

Stack - only gives a copy
Heap - it works with reference

*/

let studentName = "Mrinmoy";

let anotherStudentName = studentName; //anotherStudentName is a different stack which only contains the value of studentName
anotherStudentName = "Arnob" // It is a copy of studentName

// console.log(studentName); // Mrinmoy - Because we are changing the value in a different stack
// console.log(anotherStudentName);

let studentOne = {
    name:"John",
    studentId: 123
}

let studentTwo = studentOne; // It directly works with the refrence and for now it is studentOne
studentTwo.studentId = 345; // It is also changing the value of studentOne.studentId;
console.log(studentOne); // { name: 'John', studentId: 345 }
console.log(studentTwo); // { name: 'John', studentId: 345 }