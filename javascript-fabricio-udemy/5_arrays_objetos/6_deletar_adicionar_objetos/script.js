let carro = {
    marca: "Mitsubishi",
    modelo: "Lancer Evolution 4",
    ano: 1996,
    aerofolio: true,
    darPartida: function(){
        console.log("vrumm vrummmm")
    }
}

console.log(carro.aerofolio)

delete carro.aerofolio

console.log(carro.aerofolio)

carro.bodykit = true

console.log(carro.bodykit)

console.log(carro)

let pessoa = {
    cpf: 12345678900,
    estadoCivil: "solteira",
    nomeSujo: true
}

console.log(pessoa.nomeSujo)

delete pessoa.nomeSujo

console.log(pessoa.nomeSujo)

pessoa.credito = 1000.00 

console.log(pessoa.credito)

console.log(pessoa)