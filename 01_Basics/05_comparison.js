//confusion with null
console.log(null > 0);  //false
console.log(null == 0); //false
console.log(null < 0);  //false
console.log(null >= 0); //true
console.log(null <= 0); //true

// === for strict check considering data types too
console.log("2"===2);   //false