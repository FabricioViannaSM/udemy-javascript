class Carro{
    constructor(marca, cilindrada, airbag, teto){
        this.marca = marca;
        this.cilindrada = cilindrada
        this.airbag = airbag
        this.teto = teto
    }

    darPartida(){
        return "Vrummm, Vrummm "
    }

    get verMarca(){
        return "A marca é " + this.marca
    }

    set novaMarca(value){
        this.marca = value
    }
}
let rodas = Symbol
Carro.prototype[rodas] = 4

let focus2007 = new Carro("Ford", 1.6, false , false)
let conversivel = new Carro("Ferrari", 2.0, true, false)

console.log(focus2007.verMarca)
conversivel.novaMarca = "Mercedes"
console.log(conversivel.verMarca)

