'use strict'; // hace uso estricto, no permite asignar sin declarar las variables
pi = 3.1416;
console.log(pi);

function myFunction(){
    return pi = 3.1416;
}

console.log(myFunction());