//currently the 33 is of type string
let score = "33"
console.log(typeof score);

//conversion to number
let valueInNumber = Number(score);
console.log(typeof valueInNumber);

//now if we typecast any string value to number
let res = "33abc"
console.log(typeof res)
let valueOfres = Number(res)
console.log(typeof valueOfres)
console.log(valueOfres); //result is Not a Number (NaN)

//null is converted to zero
//true is converted to 1
//false is converted to 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn)

//1=> true 0=>false
//"Raghvendra" => true

//number can be converted to string