"use strict";
// tipo string
let nome = 'Flavio Piccolo';
console.log(nome);
// tipo array
let animais = ['Elefante', 'Cachorro', 'Gato', 'Panda'];
console.log(animais);
// tipo objeto
let carro;
carro = { marca: 'Toyota', modelo: 'Corolla', ano: 2020, preco: 200000 };
console.log(carro);
// tipo Type Annotation
function multiplicarNumero(num1, num2) {
    return num1 * num2;
}
console.log('Resultado = ', multiplicarNumero(2, 5));
// tipo boolean
let tarefaConcluida = true;
let tarefaPendente = false;
console.log(tarefaConcluida);
console.log(tarefaPendente);
