



// Crea una función llamada swap que reciba un array y dos parametros que sean 
// indices del array. La función deberá intercambiar la posición de los valores de 
// los indices que hayamos enviado como parametro. Retorna el array resultante.

// Sugerencia de array:

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];


function swap(array, index1, index2) {

  let aux = array[index1];
  array[index1] = array[index2];
  array[index2] = aux;

  return array;
}



//! este código tiene un problema de Sintaxsis, yo no puedo igualar un elemento del array a un índice,
// en este caso trendría que el elemento que coincidiera con el índice meterlo dentro de una variable e intercambiar las variables
// https://www.youtube.com/watch?v=NWaafRdaHsI
// https://es.stackoverflow.com/questions/300750/como-intercambiar-posiciones-en-un-array
function swap(array, index1, index2) {

  for (let i = 0; i < array.length; i++) {
    if (array.indexOf(array[i]) === index1) {
      array.indexOf(array[i]) = index2;
    } else if ((array.indexOf(array[i]) === index2)) {
      array.indexOf(array[i]) = index1;
    }
  }
  return array;
}

