//const is used to lock the variable and can't be changed later and now the variable is constant value
const accountId = 222120136


let accountEmail = "raghvendrasingh0898@gmail.com"
var accountPassword = "12345"
accountCity = "Kanpur"

// if the variable is not defined then its value will be undefined
let accountState;

//accountId = 2 //not allowed

accountEmail = "hero@gmail.com"
accountPassword = "123"
accountCity = "Delhi"

// table is used to print multiple variables in a single table
console.table([accountId, accountEmail, accountPassword, accountCity,accountState]);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);