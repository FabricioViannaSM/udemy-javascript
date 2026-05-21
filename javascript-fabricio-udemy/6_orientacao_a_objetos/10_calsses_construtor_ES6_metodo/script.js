class Carro{
    constructor(marca, cilindrada, airbag){
        this.marca = marca;
        this.cilindrada = cilindrada
        this.airbag = airbag
    }

    darPartida(){
        return "Vrummm, Vrummm "
    }
}

Carro.prototype.rodas = 4

let focus2007 = new Carro("Ford", 1.6, false)

console.log(focus2007)
console.log(focus2007.rodas)
console.log(focus2007.darPartida())