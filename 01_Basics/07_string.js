const name = "Raghvendra"
const repoCount = 50

//outdated type - concatenation
//console.log(name + repoCount + "Value")

//String interpolation : newer version
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Raghvendra Singh");

//lenght of the string
console.log(gameName.length);

//all characters to upper case
console.log(gameName.toUpperCase());

//to find index of the given character in the given string
console.log(gameName.indexOf('S'));

//to find character at the given index
console.log(gameName[5]);

//to find character at the particular given index
console.log(gameName.charAt(2));

//substring of the given string
const newString = gameName.substring(0,10);
console.log(newString);

//slicing
const anotherString = gameName.slice(-8,-2)
console.log(anotherString);

//trim function is used to remove spaces from the starting and end of the given string
//works on whitespace and newlines
const newStringOne = "   Raghvendra   "
console.log(newStringOne.trim());

//to replace characters
const url = "https://raghvendra.com/raghvendra%20singh"
console.log(url.replace('%20','-'));

//to check whether the character is present in the string or not
console.log(url.includes('raghvendra'))

//splitting the string 
console.log(gameName.split(' '))