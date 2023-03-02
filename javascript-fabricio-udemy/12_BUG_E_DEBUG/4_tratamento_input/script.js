function verificarNumero(valor){
    let number = Number(valor) //transforma "10", por exemplo, em 10
    if(Number.isNaN(number)){ // verifica se é um NaN
        alert("Não é um número")
    }else{
        return number
    }
}


verificarNumero("10")
verificarNumero(10)
verificarNumero("teste")