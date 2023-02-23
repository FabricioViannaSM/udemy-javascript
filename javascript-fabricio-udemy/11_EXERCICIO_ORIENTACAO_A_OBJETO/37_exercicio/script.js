//Em manutenção
class Carrinho {
    constructor(itens, itensqt, valor, ){
        this.itens = [itens]
        this.itensqt = [itensqt]
        this.itensvl = [valor]
        this.itensVlTt = itensqt * valor
    }

    adicionaItem(item, itensqt, valor){
        this.itens.push(item)
        this.itensqt.push(itensqt)
        this.itensvl.push(valor)
        this.itensVlTt = (itensqt * valor) + this.itensVlTt
    }

    removeItem(item){
        let i = (this.itens).indexOf(item)
        let vlTt = this.itensVlTt - (this.itensvl[i] * this.itensqt[1])
        this.itens.splice(i, 1)
        this.itensqt.splice(i, 1)
        this.itensvl.splice(i, 1)
        this.itensVlTt = vlTt
    }

}


let compra1 = new Carrinho("televisão", 4, 4000)

console.log(compra1)

compra1.adicionaItem("Banjo", 2, 450)

console.log(compra1)

compra1.removeItem("Banjo")

console.log(compra1)