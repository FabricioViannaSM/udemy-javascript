let regex1 = new RegExp("Teste") // forma menos utilizada
let regex2 = /Teste/ // forma mais utilizada
let string = "Essa strinfg é um Teste"

//regex.test("O que será testado")

console.log(regex2.test("Isso é um teste. Teste"))
console.log(regex2.test("Isso não é um teste."))
console.log(regex2.test(string))

console.log(regex1.test("Isso é um teste. Teste"))
console.log(regex1.test("Isso não é um teste."))
console.log(regex1.test(string))

console.log(/direto/.test("Isso é uma regex testada direto"))
console.log(/meio/.test("1234567890meio0987654321"))// funciona mesmo que esteja no meio de outros caracteres