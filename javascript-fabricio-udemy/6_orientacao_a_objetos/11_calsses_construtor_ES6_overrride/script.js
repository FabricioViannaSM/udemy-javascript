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

Carro.prototype.teto = true

let focus2007 = new Carro("Ford", 1.6, false)
let conversivel = new Carro("Ferrari", 2.0, true, false)

console.log(focus2007)
console.log(Carro.prototype.teto)
console.log(focus2007.darPartida())

console.log(conversivel)
console.log(conversivel.teto)
console.log(conversivel.darPartida())