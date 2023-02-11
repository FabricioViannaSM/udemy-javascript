function media(teste, prova){
    return (teste + prova)/2
}

console.log(media(10,8))

const notaJoaozinho = media(6, 6.2)

console.log("Esta é anota do Joãozinho:" + notaJoaozinho)

function aprovacao(mediaAluno){
    if (mediaAluno < 6){
       console.log("Reprovado, estude mais!")
    }else{
        console.log("Parabéns, você foi aprovado")
    }
}

aprovacao(notaJoaozinho)




function podeDirigir(idade, cnh){
    if(idade >= 18 && cnh == true){
        console.log("Pode dirigir")
    }else if(idade >=18 && cnh == false){
        console.log("Não pode dirigir, mas pode fazer uma cnh")
    }else{
        console.log("Não pode dirigir")
    }
}

podeDirigir(18, true)
podeDirigir(18, false)
podeDirigir(17, true)
podeDirigir(17, false)