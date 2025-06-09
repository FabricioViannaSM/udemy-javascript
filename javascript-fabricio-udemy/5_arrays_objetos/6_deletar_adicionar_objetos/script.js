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