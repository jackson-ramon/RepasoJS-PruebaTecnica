// Se puede usar para: for, for in, for of, do while

let i = 0; 
while (i < 6) {
    i++;
    if (i === 2) {
        // Esto hace que se ignore lo que esta despues y se vuelva a hacer la comprobacion del while
        continue; 
    }
    if (i === 4) {
        break;
    }
    console.log(i);
}