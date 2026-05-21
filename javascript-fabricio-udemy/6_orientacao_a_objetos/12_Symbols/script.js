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
}
let rodas = Symbol
Carro.prototype[rodas] = 4

let focus2007 = new Carro("Ford", 1.6, false , false)
let conversivel = new Carro("Ferrari", 2.0, true, false)

console.log(focus2007)

