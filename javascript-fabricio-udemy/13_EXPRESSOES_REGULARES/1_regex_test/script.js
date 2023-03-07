let reg1 = new RegExp("bola")//cria regex(forma menos utilizada)
let reg2 = /futebol///cria regex(forma mais utilizada)

console.log(reg1.test("bola de futebol"))
console.log(reg2.test("Bola De Futebol"))



console.log(/@gmail.com/.test("fabricioviannad2@gmail.com"))
console.log(/sapato/.test("tênis"))