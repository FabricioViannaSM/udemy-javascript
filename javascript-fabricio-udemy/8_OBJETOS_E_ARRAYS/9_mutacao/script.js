let pessoa1 = {
    nome: "Fabrício"
}

let pessoa2 = pessoa1

pessoa2.nome = "José"
console.log(pessoa1.nome)

pessoa1.nome = "Jurema"
console.log(pessoa2.nome)


console.log(pessoa1 == pessoa2)

let pessoa3 = {
    nome: "Fabrício"
}

console.log(pessoa1 == pessoa3)