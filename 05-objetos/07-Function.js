function Punto(x, y) {
    this.x = x;
    this.y = y;
    this.dibujar = function() { console.log('Dibujando...'); }
}

// Extender Objetos definidos antes
let punto = { z: 7 };
// Para extender un objeto existente. Se usa call y se envia un contexto
// que puede ser {}, o un objeto (ej: punto). Y de esta fomrma se tendra
// una combinacion entre los dos objetos

//Punto.call(punto, 1, 2);

// apply hace lo mismo que call pero en este caso se deben mandar los
// arguemntos de la clase Punto (principal) entre corchetes, como array.
Punto.apply(punto, [1, 2]);

console.log(punto);
// Tratar de no usar esto
// const Point = new Function('x', 'y', `
// this.x = x; 
// this.y = y; 
// this.dibujar = function() { console.log('Dibujando...'); }
// `);

// const p = new Point(1, 2);
// console.log(p);