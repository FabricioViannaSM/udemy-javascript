// \d - qualquer dígito de caractere
// \w - qualquer caractere alfanuméricio 
// \s - qualquer carcatere de espaço em branco
// \D - caracteres que não são dígitos
// \W - caractere não alfanumérico
// \S - carcatere que não são espaço em branco
// . - quaquer caractere menos nova linha

let ano = (/\d\d\d\d/)//passa maior de quatro números, é melhor utilizar o if e .length

console.log("Ano:")
console.log(ano.test("dois mil e quinze"))
console.log(ano.test("2015"))
console.log(ano.test("15"))

let tresLetras = (/\D\D\D/)//passa maior de tres letras, é melhor utilizar o if e .length

console.log("\nTrês letras:")
console.log(tresLetras.test("oi"))
console.log(tresLetras.test("oie"))
console.log(tresLetras.test("1oi"))