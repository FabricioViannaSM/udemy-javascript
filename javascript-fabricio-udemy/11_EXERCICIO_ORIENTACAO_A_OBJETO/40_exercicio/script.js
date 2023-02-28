class ContaBancaria{
    constructor(saldoCorrente, saldoPoupanca, jurosPoupanca){
        this.saldoCorrente = saldoCorrente
        this.saldoPoupanca = saldoPoupanca
        this.jurosPoupanca = jurosPoupanca
    }

    depositarCorrente(grana){
        this.saldoCorrente += grana
    }

    depositarPoupanca(grana){
        this.saldoPoupanca += grana
    }

    sacarCorrente(grana){
        this.saldoCorrente -= grana
    }

    sacarPoupanca(grana){
        this.saldoPoupanca -= grana
    }

    transferir(grana){
        this.saldoCorrente += grana
        this.saldoPoupanca -= grana
    }

    jurosDeAniversario(){
        this.saldoPoupanca += (this.saldoPoupanca * (this.jurosPoupanca / 100))
    }

}

class contaEspecial extends ContaBancaria{
    constructor(saldoCorrente, saldoPoupanca, jurosPoupanca){
        super(saldoCorrente, saldoPoupanca, jurosPoupanca*2)
    }
}


let conta = new ContaBancaria(100, 1000, 6.17)
console.log(conta)

conta.depositarPoupanca(100)
console.log(conta)

conta.depositarCorrente(100)
console.log(conta)

conta.sacarPoupanca(50)
console.log(conta)

conta.sacarCorrente(50)
console.log(conta)

conta.transferir(50)
console.log(conta)

conta.jurosDeAniversario()
console.log(conta)

let conta2 = new contaEspecial(200, 1061.7, 6.17)
console.log(conta2)

conta2.jurosDeAniversario()
console.log(conta2)