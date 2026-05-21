class Veiculo{
    constructor(velocidade){
        this.velocidade = velocidade
    }
}

class Moto extends Veiculo{
    constructor(velocidade, rodas){
        super(velocidade, velocidade)
        this.rodas = rodas
    }
}

let skate = new Veiculo(20)
console.log(skate.velocidade)

let ninja = new Moto(180, 2)
console.log(ninja.rodas)

console.log(new Moto instanceof Veiculo)