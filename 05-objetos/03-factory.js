function crearUsuario(name, email) {
    return {
        email: email, // Forma 1 de usar parametros
        name, // Forma 2 de usar parametros
        activo: true,
        recuperarClave: function () {
            console.log('Recuperando clave...');
        },
    };
}

// Crear objetos que tienen la misma estructura en cuanto a sus propiedades
let user1 = crearUsuario('Nicolas', 'nico@holamundo.io');
let user2 = crearUsuario('Jackson', 'jackson@holamundo.io');

console.log(user1, user2);