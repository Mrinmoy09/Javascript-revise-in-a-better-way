"use strict"; // treat all JS code as newer version


/*
1.String => "";
2.number => 0 to 2^53
3.bigInt => if we need a number greater then 2^53
4.boolean => true/false
5.null => it is a standalone value
6.undefined => value is not assigned 

what is not defined? => If we do not declare a variable that will be not defined; 


*/ 

const userName = "Jhon doe";
console.log(typeof userName) // string

const age = 18;
console.log(typeof age) // number

let isLoggedIn = false;
console.log(typeof isLoggedIn) // boolean

console.log(typeof null); //object

let phonrNumber;
console.log(typeof phonrNumber) // undefined

