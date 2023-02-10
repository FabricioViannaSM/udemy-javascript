let x = 0
let y = 0

if (x == 0 && y == 0){
    // Isso é uma identação
    console.log("x e y são iguais a 0")
    x += 1
    if(x == 1 && y == 0){
        //Isso é uma identação dentro de outra
        console.log(`Agora x é igual a ${x} e y é igual a ${y}`)
        for(i = 2;i <= 256 ; i *= 2){
            //Para cada bloco de código dentro de outro, o bloco de código novo deve ser identado
            console.log(i)
        }
    }
}