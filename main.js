// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

// function parOimpar(numero) {
//   if (numero % 2 === 0) {
//     console.log(`${numero} es par`);
//   } else {
//     console.log(`${numero} es impar`);
//   }
// }

// parOimpar(641);

// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

// function mayorYmenor(a, b) {
//   if (a > b) {
//     console.log(`${a} es mayor a ${b}`);
//   } else if (b > a) {
//     console.log(`${b} es mayor a ${a}`);
//   } else {
//     console.log(`${a} y ${b} son iguales`);
//   }
// }

// mayorYmenor(9, 9);

// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

// function multiplode5(numero) {
//   if (numero % 5 === 0) {
//     console.log(`${numero} es multiplo de 5`);
//   } else {
//     console.log(`${numero} no es multiplo de 5`);
//   }
// }

// multiplode5(4);

// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

// function contador(numero) {
//   for (let i = 0; i <= numero; i++) {
//     console.log(i);
//   }
// }

// contador(50);

// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

// function contadorPalabra(palabra, cantidad) {
//   for (let i = 0; i < cantidad; i++) {
//     console.log(palabra);
//   }
// }
// contadorPalabra("Messi", 10);

/* 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array. */

/* const arrayxParametro = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
};
arrayxParametro(["rojo", "verde", "azul", "blanco", "celeste"]); */

// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

/* let arrayDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const saltearEl5 = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (i === 4) {
      continue;
    }
    console.log(array[i]);
  }
};
saltearEl5(arrayDeNumeros); */

/* 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro. */

/* const multiplicacionArray = (array, num) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i] * num);
  }
};
multiplicacionArray([1, 2, 3, 4, 5], 9); */
