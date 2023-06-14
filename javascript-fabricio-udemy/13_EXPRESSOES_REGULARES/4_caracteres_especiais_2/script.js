// \d - qualquer dígito de caractere
// \w - qualquer caractere alfanuméricio 
// \s - qualquer carcatere de espaço em branco
// \D - caracteres que não são dígitos
// \W - caractere não alfanumérico
// \S - carcatere que não são espaço em branco
// . - quaquer caractere menos nova linha

let dia = (/\d\d/)//passa maior de quatro números, é melhor utilizar o if e .length

console.log("Ano:")
console.log(dia.test("2023")&& "2023".length == 2)
console.log(dia.test("dois mil e vinte e três"))
console.log(dia.test("23"))

let tresLetras = (/\D\D\D/)//passa maior de tres letras, é melhor utilizar o if e .length

console.log("\nTrês letras:")
console.log(tresLetras.test("oi"))
console.log(tresLetras.test("oie"))
console.log(tresLetras.test("1oio"))