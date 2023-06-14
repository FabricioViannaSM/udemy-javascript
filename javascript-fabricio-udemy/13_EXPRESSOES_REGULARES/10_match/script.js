const frase = "esta frase tem o número 34".match(/\d[34]/)
const frase2 = "esta frase não tem números".match(/\d[34]/)

console.log(frase)
console.log(frase.index)
console.log(frase2)// da null