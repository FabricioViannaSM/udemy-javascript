let idade = parseInt(prompt("Qual é a sua idade?"))
let nome = "Fabrício"

if(nome == "Fabrício"){
    console.log(`Olá, meu nome é Fabrício e tenho ${idade} anos`)
}else if (nome == "Jair"){
    console.log(`Olá, Jair`)
}

if(idade >= 18){
    console.log("Você é maior de idade")
}else if(typeof idade != typeof 1){
    console.log("Por favor digite um número")
}else{
    console.log("Você é menor de idade")
}

if(nome == "João" ){
    console.log("Ou seu nome é João,")
}else if( idade == 20){
    console.log("Sua idade é igual a 20 anos")
}else{
    console.log("Seu nome não é João e você não tem 20 anos")
}
