//O argumento default preestabelece um argumento caso ele não seja passado
//Ele é indicado por um sinal de "=" e a predefinição depois do argumento
//Exemplo:
function repetirFrase(frase="Olá mundo", vezes=2){
    for(let x = 0;x < vezes;x++){
        console.log(frase + " " + vezes)
    }
}

repetirFrase()

repetirFrase(undefined, 3)

repetirFrase("Aoba trem bão", 4)