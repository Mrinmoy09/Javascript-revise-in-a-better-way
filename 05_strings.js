//-----------String concatenation-----------

const userName = "mrinmoyarnob";
const followers = 50;

// console.log(userName.length); // 12 
//console.log(userName[0]); //m

// console.log(userName+followers+"value"); // Not a better approach due to limitations

// console.log(`${userName} have ${followers} followers`); // Better approach
//output-mrinmoyarnob have 50 followers


//There is another way to define a string using String() methods

const gameName = new String('pokemon');
// console.log(gameName); //output-[String: 'pokemon']
// console.log(typeof gameName); // output-object 


// console.log(gameName.trim());
// console.log(gameName.toUpperCase());








//***************************************************/



//-----------------substring method , substring()------------
// console.log(gameName.substring(2,5)); 
//output- ke 
//? why? => "k" = 2 ,"e" = 3 
//so we can see it's start from 1st argument and ends before 2nd argument-1 
//always starts from 0 inedx

//--------------Replace method ,  replace()----------------
const url ="https//www.facebook.com/marnob%20arnob"
// console.log(url.replace('%20' , '-')); 
// "%20"-> serach value , "-" -> replaced value

//output- https//www.facebook.com/marnob-arnob


//-------------Slice Method ,  slice()------------------
const str = 'The quick brown fox jumps over the lazy dog'

// console.log(str.slice(15)); // fox jumps over the lazy dog.
// 15 to last index as there is no 2nd argument


// console.log(str.slice(3,15))
// starts from 3 and ends before 15 exactly (15-1)= 4

//1st argument to (2nd argument-1);
//output-quick brown

// we can also use negetive values as argument
// console.log(str.slice(-3)) //dog 
// console.log(str.length) //43
// the substring starts at max(indexStart + str.length, 0). indexStart = -3 and str.length = 43 so indexStart + str.length = 40

// console.log(str.charAt(40)); // 'd'

// console.log(str.slice(-8 , 37)) //indexStart + str.length = -8+43 = 35 and indexEnd = 37-1 = 36 //la
// console.log(str.charAt(35)) // 'l'
//console.log(str.charAt(37)); // 'a'


//------------------------Split method , split()-------------------
console.log(str.split(' ' , 3)); //indexEnd = 3-1 =2



//**************************************************************************************//
//------------Regular Expression----------
// There are two ways-

//--------------1st way:
const re = /ab+c/; // it is a pattern enclosed between slashes
// /your_pattern_here/

/*
when to use this 1st way?
If the regular expression remains constant and it also can improve performance.
*/

//-------------2nd way:
const regEx = new RegExp("ab+c"); // its is a  constructor function of the RegExp object
// "ab+c" is the pattern here 
/*
when to use this 2nd way?
Use the constructor function when you know the regular expression pattern will be changing,
or you don't know the pattern and are getting it from another source, such as user input.
*/

//------------more about patterns-----------------

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions#using_simple_patterns

//************************************//



