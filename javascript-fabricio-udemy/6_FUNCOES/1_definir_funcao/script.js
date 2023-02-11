function escreverNoConsole(){
    console.log("Escrevendo no console")
}

escreverNoConsole()

//functions sem nome dentro de variáveis chamam-se funções anônimas.
const escrever = function(){
    console.log("Escrevendo com uma função anônima")
}

// toda função precisa ser chamda  junto a um parêntese, mesmo que seja numa variável.
escrever() 

//parametro é o que fica dentro do parêntese, depois da função
const escreverPorParametro = function(escrever){
    console.log(escrever)
}

escreverPorParametro("Ontem tomei vitamina de banana")

const escreverNumero = function(num){
    console.log(`Esse é o número: ${num}`)
}

escreverNumero(11)
escreverNumero(12)
escreverNumero(13)

const numeroAleatorio = function(){
    console.log(Math.random())
}

numeroAleatorio()
numeroAleatorio()