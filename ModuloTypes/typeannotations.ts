
// tipo string
let nome:string = 'Flavio Piccolo';
console.log(nome);

// tipo array
let animais: string[] = ['Elefante', 'Cachorro', 'Gato', 'Panda']
console.log(animais)

// tipo objeto
let carro: {
    marca: string;
    modelo: string;
    ano: number;
    preco: number;
}

carro = {marca: 'Toyota', modelo: 'Corolla', ano: 2020, preco: 200000}
console.log(carro)

// tipo Type Annotation

function multiplicarNumero(num1: number, num2: number){
    return num1 * num2;
}
console.log('Resultado = ', multiplicarNumero(2,5))

// tipo boolean
let tarefaConcluida: boolean = true;
let tarefaPendente: boolean = false;

console.log(tarefaConcluida);
console.log(tarefaPendente);
