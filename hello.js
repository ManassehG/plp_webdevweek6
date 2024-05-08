// Intro to js
console.log("Hello my name is Manasseh");
console.log("I am a student at PLP");

//Variables in javascript
var name = "Manasseh Gikonyo";

console.log(name);

let message = "I am a student at PLP";
console.log(message);

const PI = 3.142;

//variables are case sensitive in js
//camelCase- firstCase and snakeCase - last_name 
// Data types
//Boolean
var success = true;
var fail = false;

if(success){
    console.log("You passed");
}
//Number
//Integer
var int = 100;
console.log(int);
//Float
var float = 3.14152;

console.log(float);

//String

var name = "Manasseh";
console.log(name);

var message2 = "I am a student at PLP";
console.log(message2);
// Undefined - hasnt been assigned any value
var int2;

console.log(int2);

//Null - has been assigned a value of null
let age = null;
console.log(age);

//Alwasys be cautious
var a = 10;
var b = "10";
var c = Number(b);

console.log(a + c);

//Operators
//addition

var a = 10;
var b = 20;

console.log(a + b);

//subtraction
console.log(a - b);
//Multiplication
console.log(a * b);
//Division
console.log(a / b);
//Exponeniation
console.log(a**b);
// Modulus
console.log(a%b);

var x = 100;
//Increment - ++
x++
console.log(x)
//Decrement
var y = 100;
y--
console.log(y);
//Addition assignment
var x = 100;
var y = 50;
x += y;
console.log(x);
//Subtraction assignment
var x = 100;
var y = 50;
x -= y;
console.log(x);
//Multiplication assignment
var x = 100;
var y = 50;
x *= y;
console.log(x);
//Division assignment
var x = 100;
var y = 50;
x /= y;
console.log(x);
//Modulus assignment
var x = 100;
var y = 50;
x %= y;
console.log(x);

//Comparison operators
//Equal ==
console.log(x ==y);

//Not equal!=
console.log(x!= y);

//Greater than >
console.log(x > y);

//Less than <
console.log(x < y);

x = 100;
y = 50;
//Logical Operators

//AND - &&
if(x == 100 && y == 50){
    console.log(true);
} else {
    console.log(false);
}
//OR - ||

if(x == 100 || y == 50){
    console.log(true);
} else {
    console.log(false);
}
//Not - !

if(x != y){
    console.log(true);
} else {
    console.log(false);
}

//Ternary Operator

var x = 100;
var y = 50;
var z = x > y? "x is greater than y" : "x is less than y";
console.log(z);
var balance = 1000;
//Conditional statements
if(balance > 1000){
    console.log("You can purchase this item");
} else if(balance < 1000){
    console.log("You can not purchase this item");
} else {
    console.log("You have just enough.");
}







