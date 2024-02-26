let pairs = [
    [1, { name: "Nicolas" }],
    [2, { name: "Felipe" }],
    [3, { name: "Chanchito" }],
];

function toCollection(arr) {
    let arrayObjetos = [];

    // for (idx in arr) {
    //     arrayObjetos[idx] = {id: arr[idx][0], name: arr[idx][1].name};
    // }

    for (idx in arr) {
        arrayObjetos[idx] = arr[idx][1];
        arrayObjetos[idx].id = arr[idx][0];
    }

    return arrayObjetos;
}

let resultado = toCollection(pairs);
console.log(resultado);