


// Dado el siguiente javascript usa forof y forin para hacer la media del 
// volumen de todos los sonidos favoritos que tienen los usuarios.

const users = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Pedro",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Cristina",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];


//! por que no me funcionaba el código
// En lugar de iterar sobre las propiedades del objeto user, estaba iterando sobre las claves del objeto user 
// (que en este caso son "name" y "favoritesSounds"). 
// Debía acceder directamente a user.favoritesSounds para obtener el objeto de sonidos favoritos y 
// luego iterar sobre las propiedades de ese objeto.


const totalVolume = [];

for (const user of users) {
  for (const soundKey in user.favoritesSounds) {
    totalVolume.push(user.favoritesSounds[soundKey].volume);
  }
}

//!acceso a los objetos anidados
// El uso de corchetes [ ] en user.favoritesSounds[soundKey].volume es para acceder a la propiedad del objeto
// (que en este caso es otro obejto) usando la variable soundKey como nombre de la propiedad.
// Esto es necesario porque soundKey es una variable y no el nombre de la propiedad directamente. 

const average = (totalVolume.reduce((a, b) => a + b, 0)) / totalVolume.length

console.log(average)





