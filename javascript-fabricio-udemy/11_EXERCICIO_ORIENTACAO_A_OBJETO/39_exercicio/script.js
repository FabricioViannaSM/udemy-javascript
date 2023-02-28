class Carro {
    constructor(marca, cor, gasolinaRestante, consumo){
        this.marca = marca
        this.cor = cor
        this.gasolinaRestante = gasolinaRestante
        this.consumo = consumo
    }

    dirigir(km){
        this.gasolinaRestante -= (km/ this.consumo)
    }

    absatecer(l){
        this.gasolinaRestante += l
    }
}

let corsinha = new Carro("Chevrolet", "Amarelo", 45, 13)
console.log(corsinha)

corsinha.dirigir(13)
console.log(corsinha)

corsinha.absatecer(1)
console.log(corsinha)