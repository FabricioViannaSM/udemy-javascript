let cnh = true
let idade = 18

if (idade >= 18 && cnh == true){
    console.log("Pode dirigir.")
}else if(idade < 18 && cnh == true){
    console.log("Você precisa ser maior de idade para dirigir.")
}else if(idade >= 18 && cnh == false){
    console.log("Você precisa de uma cnh para dirigir.")
}else{
    console.log("Você precisa ser maior de idade e possuir uma cnh para dirigir.")
}