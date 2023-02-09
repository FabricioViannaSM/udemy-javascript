// A estrutura de controle else só acontece se a estrutura de controle if não for atendida

let limiteDeVelocidade = 70
let limitePessoa = prompt("Qual é a sua velocidade?")
parseInt(limitePessoa)
let multa = 100 +((limitePessoa - limiteDeVelocidade)* 0.1)

if (limitePessoa > limiteDeVelocidade){
    console.log(`Você ultrapassou o limite de velocidade, sua multa é de ${multa}R$`)
}else{
    console.log("Obrigado pelo respeito as leis de trânsito, boa viagem!") 
}