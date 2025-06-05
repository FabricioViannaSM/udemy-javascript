function nomeComIdade(nome, idade){
    if(idade === undefined){
        console.log("Olá, " + nome +" diga a sua idade!")
    }else{
        console.log("Olá, " + nome +"  a sua idade é de " + idade + " anos")
    }
}

nomeComIdade("Fabrício", 20)