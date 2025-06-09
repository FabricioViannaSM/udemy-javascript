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
