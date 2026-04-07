let objeto1 = {
    propriedade1: true,
    propriedade2: "Sim"
}

let objeto2 = objeto1

objeto2.nome = "Dexter"

console.log(objeto1, objeto2)


console.log(objeto1 == objeto2)

let objeto3 = {
    propriedade1: true,
    propriedade2: "Sim"
}

console.log(objeto1 == objeto3)

let fulano = {
    nome: false
}

let ciclano = fulano

let eIgual = fulano == ciclano
 
console.log(`Fulano é igual a ciclano? ${eIgual}` )

let beltrano = {
    nome: false
}

eIgual = fulano == beltrano

console.log(`Fulano é igual a beltrano? ${eIgual}`)
