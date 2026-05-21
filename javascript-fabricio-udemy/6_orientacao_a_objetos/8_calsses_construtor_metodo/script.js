function Carro(cor, cilindrada, airbag){
    this.cor = cor;
    this.cilindrada = cilindrada;
    this.airbag = airbag;

}
    Carro.prototype.partida = function(){
        return "VRUMMMM"
    }
let focus2007 = new Carro("Preto", 1.6, false)

console.log(focus2007)
console.log(focus2007.partida())