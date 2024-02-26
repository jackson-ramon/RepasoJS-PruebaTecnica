let user = {
    id: 1,
    name: "Chanchito feliz",
    age: 25,
}

for (let prop in user) {
    console.log(prop, user[prop]);
}


// Para acceder a los elementos de un array no usar FOR IN, USAR FOR OF
// Solo hacerlo en casos exepcionales
let animales = ['Chanchito feliz', 'Dragon', 'Canguro'];
for (let indice in animales) {
    console.log(indice, animales[indice]);
}