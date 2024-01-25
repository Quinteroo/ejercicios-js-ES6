

// 4.1 Dado el siguiente array, devuelve un array con sus nombres 
// utilizando .map().
const users1 = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' }
];

const user1Name = users1.map((user) => user.name)
console.log(user1Name)


// 4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
// de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
// empiece por 'A'.
const users2 = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' }
];

const user2Name = users2.map((user) => (user.name.includes('A')) ? user.name = 'Anacleto' : user.name)
console.log(user2Name)



// 4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
// de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
// cuando el valor de la propiedad isVisited = true.
const cities = [
  { isVisited: true, name: 'Tokyo' },
  { isVisited: false, name: 'Madagascar' },
  { isVisited: true, name: 'Amsterdam' },
  { isVisited: false, name: 'Seul' }
];


const citiesVisited = cities.map((city) => (city.isVisited === true) ? city.name + ' (Visitado)' : city.name)
console.log(citiesVisited)