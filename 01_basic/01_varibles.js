const accountId=144553
let accountEmail="abc123@gmail"
var accountPassword="12345"
/*
prefer not use var 
beacuse of issue in block scope and functional scope
*/
accountCity="bihar"
//accountId=2 //NOT allowed
accountEmail="sbihack@gmail.com"
accountPassword="12133"
accountCity="patna"
console.log(accountId);
console.table([ accountEmail, accountId,accountPassword, accountCity])
