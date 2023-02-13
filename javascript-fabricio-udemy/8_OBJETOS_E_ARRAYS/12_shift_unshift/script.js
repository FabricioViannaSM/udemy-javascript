let nomes = ["Paulo", "Pedro", "Pitolomeu"]

//Quando se armazena uma array.pop() dentro de uma variável, o valor ejetado é armazendo na variável
//array.shift() = remove o inicio da Array
//array.unsshift(valor) = aciona um valor no inicio da array



let nomeEjetado = nomes.shift()

console.log(nomeEjetado)
console.log(nomes)

nomes.unshift("Pitolomaico")

console.log(nomes[0])
console.log(nomes)