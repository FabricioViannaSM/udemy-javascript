const pessoa = {
    maos: 2
}

// Assim se cria um prototype dentro de um objeto criado

const pessoaNova = Object.create(pessoa)

console.log(pessoaNova.maos)

console.log(pessoa.hasOwnProperty("maos"))
// O método hasOwnProperty() verifica se há a properieda no parâmetro dentro do objeto que chamou o método

console.log(Object.getPrototypeOf(pessoaNova) === pessoa)
//O método getPrototypeOf() retorna o prototype pedido do objeto no parâmetro