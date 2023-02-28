// Em revisão

class Carrinho{
    constructor(itens, qtd, precototal){
    this.itens = itens
    this.qtd = qtd
    this.precototal = precototal
    }

    addItem(item){

        let contador = 0

        for(let  itemCarrinho in this.itens){ // tirar duvida da utilização do for
            if(item.id == this.itens[itemCarrinho].id){
                this.itens[itemCarrinho].qtd += item.qtd
                contador = 1 
            }
        }

        if(contador == 0){
            this.itens.push(item)
        } 

        this.qtd += item.qtd
        this.precototal += item.qtd * item.preco
    }

    removeItem(item){
        for(let  itemCarrinho in this.itens){ // tirar duvida da utilização do for
            if(item.id == this.itens[itemCarrinho].id){

            let obj = this.itens[itemCarrinho]
            let i = this.itens.findIndex(function(obj){return obj.id == item.id})

            this.qtd -= this.itens[itemCarrinho].qtd
            this.precototal -= this.itens[itemCarrinho].qtd * this.itens[itemCarrinho].preco

            this.itens.splice(i, 1)
            }
        }
    }

}

let meuCarrinho = new Carrinho(
[{
    id: 01,
    nome: "blusa",
    qtd: 1,
    preco: 20.50
},
{
    id: 02,
    nome: "calça",
    qtd: 2,
    preco: 50
}
], 3 , 120.50)


console.log(meuCarrinho)

meuCarrinho.addItem({id: 01, nome: "blusa", qtd: 2, preco: 20.50})

console.log(meuCarrinho)

meuCarrinho.addItem({id: 03, nome: "boné", qtd: 1, preco: 15})
console.log(meuCarrinho)

meuCarrinho.removeItem({id: 01, nome: "blusa", qtd: 2, preco: 20.50})
console.log(meuCarrinho)
