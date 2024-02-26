/**
 * indice validar que no sea menor a cero y que el elemento exista
 * en el array
 */

function getbyIdx(arr, idx) {
    if (idx >= 0 && idx < (arr.length)) {
        return arr[idx];
    } else {
        return "El indice no es valido";
    }
}

let resultado = getbyIdx([1, 2], 0);
console.log(resultado);