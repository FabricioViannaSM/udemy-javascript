let nomes = ["Mateus", "Marcos", "Lucas", "João", "Pedro"]

nomes.forEach(nome =>{
    console.log("O nome é " + nome)
})

/*array.forEach((valor do elemento do array, indice do elemento do array, array em si)=>{
    instrução
})

*/

let numeros = [1, 2, 3, 4, 5]

numeros.forEach((valor, indice, array)=>{
    array[indice] = valor + 1
})
console.log(numeros)