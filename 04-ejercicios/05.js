let array = [2, 5, 7, 15, -5, -100, 55];

function getMenorMayor(arr) {
    let arrayMenorMayor = [0,1]
    arrayMenorMayor[0] = arr[0];
    arrayMenorMayor[1] = arr[arr.length-1];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arrayMenorMayor[0]) {
            arrayMenorMayor[0] = arr[i];
        }

        if (arr[i] > arrayMenorMayor[1]) {
            arrayMenorMayor[1] = arr[i];
        }
    }

    return arrayMenorMayor;
}


// Opcion mas optima
function getMenorMayor2(arr) {
    let menor = arr[0];
    let mayor = arr[0];
    for (numero of arr) {
        menor = menor < numero ? menor : numero;
        mayor = mayor > numero ? mayor : numero;
    }
}

let numeros = getMenorMayor(array);
console.log(numeros);

let numeros2 = getMenorMayor2(array);
console.log(numeros);