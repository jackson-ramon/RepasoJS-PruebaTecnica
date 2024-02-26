let array = [2, 5, 7, 15, -5, -100, 55];

function cuantosPositivos(arr) {
    let cantidadPositivos = 0;

    for (let numero of arr) {
        numero > 0 ? cantidadPositivos++ : cantidadPositivos;
    }

    return cantidadPositivos;
}

let resultado = cuantosPositivos(array);
console.log(resultado);