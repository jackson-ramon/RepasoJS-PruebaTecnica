let animales = ['chanchito', 'caballo']; // array literal
console.log(animales);
console.log(animales[0]);
animales[2] = 'dragon';
console.log(animales);

/*
Tener cuidado con el tamaño del arreglo ya que
se puede hacer referencia a una posicion muy lejana
del ultimo registro con el cuenta el array lo que
provocara que el las demas posiciones se pongan como vacias
Ejemplo:
*/
animales[10] = 'pez';
// Imprimiendo una posicion que no tiene ningun elemento
console.log(animales[7]);
console.log(typeof animales);
console.log(animales.length);