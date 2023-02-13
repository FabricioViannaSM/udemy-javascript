// Objetos são uma coleção de propriedades

let estante = {
    prateleiras: 4,
    material: "Madeira",
    colocarLivro: function(){
        console.log("Você adicionou um livro a estante")
    }
}

console.log(estante.prateleiras)
console.log(estante.material)
estante.colocarLivro()
//[] = Array
//{} = Objeto