const user = { id: 1 };

// A un bojeto declarado como CONSTANTE si se le puede agregar o quitar
// propiedades, como se ve a continuacion:
user.name = 'Nicolas';
user.guardar = function () {
    console.log('Guardando', user.name);
}
user.guardar();

delete user.name;
delete user.guardar;

console.log(user);

// Crear un objeto CONSTANTE pero hacer que no se puedan modificar
// sus propiedades -> freeze
// const user1 = Object.freeze({ id: 1 })

// Permitir cambios de propiedades existentes de un objeto
// CONSTANTE -> seal
const user1 = Object.seal({ id: 1 });
user1.name = 'Nico';
user1.id = 2;
console.log(user1);