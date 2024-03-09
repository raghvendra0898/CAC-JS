//Primitive Datatypes
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
const score = 100 //number
const scoreValue = 100.3

const isLoggedInn = true //boolean
const outsideTemp = null //object
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 34565423254895485n //BigInt

//Javascript is a dynamically typed language.

// Reference or Non-Primitive Datatypes
// types: Array, Objects, Functions
const heros = ["shaktiman","naagraj"]
let myObj = {
    name1 : "Raghvendra",
    age : 23,
}
const myFunction = function(){  //function object
    console.log("Hello World!")
}
console.log(typeof bigNumber)

"use strict"; //treat all JS code as newer version

//alert("hello") //we are using nodejs, not browser

console.log(3
    +3) //code readability should be high

//number => 2 to power 53
let age = 24

//bigint
//string => in both single and double quote allowed
let name = "Raghvendra"

//boolean => true or false
let isLoggedIn = false

//null => standalone value and its type is object
let state = null

//undefined => value is still not defined
//symbol => unique

//object

console.log(typeof("Age"))
console.log(typeof(null)) //object type
console.log(typeof(undefined)) //undefined type