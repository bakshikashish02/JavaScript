const accountId = 140088
let accountEmail = "kb@gmail.com"

/* now coming to var keyword it is not used that nowadays because it 
doesn't have the knowledge of the scope concept. So, use let keyword. 
Scope concept - block scope and functional scope.*/

var accountPassword = "123"

/* directly writing the variable_name without using the keyword is not preferable. */

accountCity = "Kangra"
let accountState;
//accountId = 2 // not allowed

accountEmail = "kb1@google.com"
accountPassword = "777"
accountCity = "Dharmasala"

// shortcut - write log then press enter to fulfill the below code
console.log(accountId);

// Tip - Instead of writing console.log again and again new method to 
// print the all the variables
// Semi - colon is a choice in javascript.
console.table([accountId, accountEmail, accountPassword, accountCity,accountState]);
