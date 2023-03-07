let reg1 = /[0-9]/// verifica se a string tem número
let reg2 = /[12345]/


console.log(reg1.test("camisa 10"))
console.log(reg1.test("0 à esquerda"))

console.log(reg2.test("camisa 10"))// dá true pois contém 1
console.log(reg2.test("0 à esquerda"))
