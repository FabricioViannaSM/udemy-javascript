let carro = {
    marca: "Mitsubishi",
    modelo: "Lancer Evolution 4",
    ano: 1996,
    darPartida: function(){
        console.log("vrumm vrummmm")
    }
}

console.log(carro.modelo)
console.log(carro.ano)
carro.darPartida()

let papagaio = {
    asas: 2,
    patas: 2,
    penas: true,
    repetirFrase: function(frase){
        console.log(`LORO, ${frase}, LORO`)
    }
}

console.log(papagaio.asas)
console.log(papagaio.patas)
console.log(papagaio.penas)
papagaio.repetirFrase("OOOOO POTÊNCIA")

// [] = array
// {} = objeto