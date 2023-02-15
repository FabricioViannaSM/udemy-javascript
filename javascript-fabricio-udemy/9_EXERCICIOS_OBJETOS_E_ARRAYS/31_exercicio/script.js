let titulosBrasil = [1958, 1962, 1970, 1994, 2002]
let titulosArgentina = [1978, 1986, 2022]

function maiorCampeao(n){
    let nElementos = n.length
    if (nElementos >= 5){
        console.log("Essa seleção é a maior campeã de copas do mundo!")
    }else{
        console.log("Essa seleção não é a maior campeã de copas do mundo!")
    }
}

maiorCampeao(titulosBrasil)

maiorCampeao(titulosArgentina)