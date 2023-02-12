function podeDirigir(idade){
    if(idade >= 18){
        return "Pode dirigir"
    }else{
        return "Não pode dirigir"
    }
}

console.log(podeDirigir(19))
console.log(podeDirigir(18))
console.log(podeDirigir(17))