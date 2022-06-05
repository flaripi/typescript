
// boolean (true /  false)
let isopen: boolean
isopen = true


// string ('foo', "foo", `foo`)
let message = `foo`

// number (int, float, hex, binary)
let total: number
total = 0xff0

//array (type[])
let items = ["foo", "bar"]

let values: Array<number>
values = [1, 2, 3]

// title
let title: [number, string, string];
title = [1, "foo", "bar"];

// enum
enum Colors {
    white = "#fff",
    black = "#000"
}

// any (qualquer coisa) Nao utilizar JAMAIS kkkkkkkkkkkkk
let coisa;
coisa = [1];

// void (vazio)
function logger(): void {
    console.log('foo')
}

// null / undefined
type Bla = string | undefined

// never
function error(): never {
    throw new Error("error");
}

// object
let cart: object;
cart = {
    key: "fi"
}

// Type inference
let message2 = "mensagem definida"
message2 = "string nova"

window.addEventListener("click", (e) => {
    console.log(e.target);
})


