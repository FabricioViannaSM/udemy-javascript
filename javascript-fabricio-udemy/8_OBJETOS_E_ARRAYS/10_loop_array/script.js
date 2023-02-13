let nomes = ["Pedro", "Tiago", "Jõao"]

for(let i = 0; i <= nomes.length - 1; i++){
    console.log(nomes[i])
}

let camisa = {
    promoção: true
}

let camisola = {
    promoção: false
}

let cueca = {
    promoção: true
}

let calça = {
    promoção: false
}

let produtos = [camisa, camisola, cueca, calça]
for(let i = 0; i<=produtos.length - 1; i++){

    
    if(produtos[i].promoção == true){
        console.log("O produto " + i + " está em promoção.")
    }else{
        console.log("O produto " + i + " não está em promoção.")
    }
}