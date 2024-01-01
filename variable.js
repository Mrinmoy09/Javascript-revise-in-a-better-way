/*
    We can declare variables in JavaScript using 3 different ways. There are three keywords that we can use to declare a varibale.
    var,let,const
    var and let: if we want to change the value of our variables then we should declare our variables using var and let
    const: if we do not want to change the value of our variable then we should use const

    difference between var and let: 

    when we use let - Variables declared inside a { } block scope cannot be accessed from outside the block;
    when we use var - Variables declared inside a { } block scope can be accessed from outside the block.
    Variables declared with the "var" keyword can NOT have block scope.

*/

const userId = 119284; // global scope
let userName = "Arnob"; // global scope
var userEmail = "mrinmoy@gmail.com"; // global scope

{
    let a = 20 // Block scope - but we can not use it outside the block
}

{
    var b = 10; // Block scope - but we can use it outside the block
}


/* 
    What is scope in javascript: when we use curly braces like this {} - it creates a scope. There are three kinds of scope:
        1/Block Scope - Variables declared inside a { } block cannot be accessed from outside the block;
        2/Globale Scope - All scripts and functions on a web page can access it. 
        3/Function scope - Variables defined inside a function are not accessible (visible) from outside the function (same for var,let and const)
*/

function callVariable(){
    var x = 45; // function scope
    //whenever we declare a variable inside a function scope we can not access it from the outside of this function but we can access it inside the funtion
    console.table([userId,userName,userEmail]);
};

// callVariable();

// console.log(x);


// userName = "Mrinmoy";
// userEmail = "arnob@gmail.com";

// console.table([userId,userName,userEmail]);

// Here is some better explanation of the differnces between var and let

// Using var
function exampleVar() {
    console.log(x); // undefined (hoisted, but not initialized)
    var x = 5;
    if (true) {
      x = 10;
      console.log(x); // 10 (same variable, due to function scope)
    }
    console.log(x); // 10 (still the same variable)
  }
//   exampleVar();

// Using let
function exampleLet() {
    // console.log(y); // ReferenceError: Cannot access 'y' before initialization
    let y = 5; //  function scope 
    if (true) {
      let y = 10; // it is a different variable
      let x = 20; // block scope
      console.log(x);
      console.log(y); // 10 (different variable, due to block scope)
    }
    x = 10;
    console.log("x", x);
    console.log(y); // 5 (original variable still accessible)
  }
  exampleLet();


variable = "abc"; //  the weird way of javascript that we can declare a variable without using any keywords like - let,const or var
console.log(variable);