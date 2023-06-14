let reg1 = /[157]/
let reg2 = /[0-9]/ //  o mesmo que "tem numeros?"

console.log(reg1.test("Contém o número 7?"))
console.log(reg1.test("Contem o número 9?"))

console.log(reg2.test("contém o número 8?"))