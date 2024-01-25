

// Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto 
// y devuelve la posición del array cuando el valor del array sea igual al valor del 
// texto que enviaste como parametro.

// Haz varios ejemplos y compruebalos.

// Ej array:
const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

// Sugerencia de función:

let index;

function findArrayIndex(array, text) {

  for (let i = 0; i < array.length; i++) {

    if (text === array[i]) {
      index = array.indexOf(array[i])
    }
  }
  return (index)
}


//! refactorización
const findArrayIndex = (array, text) => {
  return array.indexOf(text);
}




