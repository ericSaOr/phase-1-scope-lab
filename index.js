// Write your solution in this file!

var customerName = "bob";
var upperCase = customerName.toUpperCase();
const leastFavoriteCustomer = 'Ernie'
//arrow function syntax
//(param1, paramN) => {
//     let a = 1;
//     return a + param1 + paramN;
//  }

// const upperCaseCustomerName = customerName => {
//     return customerName.toUpperCase;
// }

function upperCaseCustomerName () {
    customerName = customerName.toUpperCase();

    
}

function setBestCustomer () {
    bestCustomer = 'not bob';
}


function overwriteBestCustomer () {
    bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer () {
    leastFavoriteCustomer = 'The Ernies';


}