/*
How the memory works in JavaScript?

two types of memory : Stack and Heap
Stack is used in Primitive datatypes, we get copy of file

Heap is used in non-primitive datatypes, we get reference of a file
 */

let myYoutubename = "raghvendra0898"
let anothername = myYoutubename

anothername = 'chaiaurcode'

console.log(myYoutubename)
console.log(anothername)

let userOne = {
    email: "raghvendra@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "raghvendra0898@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)