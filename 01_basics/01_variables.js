console.log("Welcome to JavaScript Variables");
const accountId = 144553;
let accountEmail = "huzaifa@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;

// accountId = 2; // not allowed

accountEmail = "hd@gc.com";
accountPassword = "215468";
accountCity = "Chandigarh";


/*
Prefer not to use var
because of issue in block scope and functional scope
*/



console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
