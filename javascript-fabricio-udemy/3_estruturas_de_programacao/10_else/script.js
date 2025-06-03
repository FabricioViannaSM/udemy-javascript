let idade = 17
let nome = "Fabrício"

if(nome == "Fabrício"){
    console.log(`Olá, meu nome é Fabrício e tenho ${idade} anos`)
}

if(idade >= 18){
    console.log("Você é maior de idade")
}else{
    console.log("Você é menor de idade")
}

if(nome == "João" || idade == 20){
    console.log("Ou seu nome é João, ou sua idade é igual a 20 anos")
}else{
    console.log("Seu nome não é João e você não tem 20 anos")
}
