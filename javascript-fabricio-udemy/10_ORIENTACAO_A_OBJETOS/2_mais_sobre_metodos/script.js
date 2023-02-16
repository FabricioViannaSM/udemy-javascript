let cachorro = {
    nome: undefined,
    latir: function(){
        console.log("Au, Au.")},
    latirEducadamente: function(){
        console.log("Com licença Sr, Au Au.")},
    setNome: function(nomeDoDog){
        this.nome = nomeDoDog},
    getNome: function(){
        return "Esse é o nome do cachorro: " + this.nome
    }
}

console.log(cachorro.nome)
cachorro.setNome("Rafael")
console.log(cachorro.nome)
console.log(cachorro)
console.log(cachorro.getNome())