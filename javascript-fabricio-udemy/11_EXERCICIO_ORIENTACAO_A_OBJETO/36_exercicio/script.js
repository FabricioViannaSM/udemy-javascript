class Banco {
    constructor(){
        this.saldo = 0
    }

    deposito(num){
        return this.saldo = this.saldo + num
    }
    saque(num){
        return this.saldo = this.saldo - num
    }
}

let bradesco = new Banco

console.log(bradesco.saldo)

bradesco.deposito(30)
console.log(bradesco.saldo)

bradesco.saque(10)
console.log(bradesco.saldo)