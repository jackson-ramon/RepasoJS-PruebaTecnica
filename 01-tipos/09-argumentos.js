function suma(a, b) {
    // arguments: para acceder a todos los datos que se envien
    console.log(arguments);
    return a + b;
}

let resultado = suma(5, 6, 1, 2, 3);
console.log(resultado);
console.log(typeof suma);