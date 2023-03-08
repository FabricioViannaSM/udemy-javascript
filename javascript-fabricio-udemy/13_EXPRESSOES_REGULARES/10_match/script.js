const frase = "O número 101 está aqui"
const frase2 = "O número não está aqui"

console.log(frase.match(/\d+/))
console.log(frase.match(/\d+/).index)

console.log(frase2.match(/\d/))