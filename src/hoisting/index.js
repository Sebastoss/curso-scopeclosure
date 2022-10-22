// var nameOfDog; // undefined por hoisting

// console.log(nameOfDog); // undefined
// var nameOfDog = 'Elmo'; // asignar  y declarar
// console.log(nameOfDog); // muestra elmo

//var elmo; // undefined
nameOfDog();

function nameOfDog(){
    console.log(`El mejor perrito es ${elmo}`);

}

var elmo = 'Elmito'; // Si esta variable no estuviera directamente daria error porque no esta declarada.
