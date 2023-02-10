// Esse código verifica qual é o primeiro número de uma determinada tabuada que é divisivel por outra.

// MÉTODO DE FUNCIONAMENTO:

/* 1. Colocar o número da tabuda escolhida na inicialização (depois do sinal "="), 
e no incrmento do loop for(depois do sinal "+=").*/
// (No exemlpo abaixo é o 5)

//2. Colocar o número divisível a ser testado na estrutura de controle if(depois do "%")
//(No exemplo abaixo é o 3)


for(let i = 2; i <30; i += 5){

    console.log(i)

    if(i%3 == 0){

        console.log(i)
        break

    }

}