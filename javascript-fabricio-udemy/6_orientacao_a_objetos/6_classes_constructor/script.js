function criarCNH(categoria){
    let cnh = Object.create({})
    cnh.categoria = categoria
    return cnh
}

let carro = criarCNH("B")
console.log(carro.categoria)