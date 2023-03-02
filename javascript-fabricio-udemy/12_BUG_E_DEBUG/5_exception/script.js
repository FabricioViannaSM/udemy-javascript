function saudar(nome){
    if(typeof nome != "string"){
        throw new Error("Nome inválido, não é string")// cria um erro e uma mensagem
    }else{
        console.log(`Bem vindo ${nome}!`)
    }
}

saudar("Roberto")
saudar(1)

console.log("teste")// não será imprimido porque tem um erro na linha 10