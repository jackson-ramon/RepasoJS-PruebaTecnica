/**
 * Primitivos se COPIAN
 * Ejemplo 1:
let a1 = 1;
let b = a1;

b++; b se modifica pero a1 se mantiene igual
console.log(a1, b); 

 * Ejemplo 2:
let a2 = 1;

function suma1(n) {
    n++; se crea una copia de a2 que sera n y solo eso se modifica
}

suma(a2);
console.log(a2);
*/


/**
 * Referencia se REFERENCIAN
 * Si se hace algun cambio en
 * una referencia tambien se lo hara en el original. Sucede con: objetos,
 * array y funciones.
 */
let a = { prop: 1 };

function suma(n) {
    n.prop++;
}

suma(a);
console.log(a);