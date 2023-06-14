let sem123 = /[^123]/ //retorn false para as stirngs que contem apenas o prâmetro

console.log(sem123.test("1"))
console.log(sem123.test("123"))
console.log(sem123.test("não contém apenas 123"))

let deAaZ = /[^a-z]/ // se só tem letras retorna false

console.log(deAaZ.test("receba"))
console.log(deAaZ.test("123"))
console.log(deAaZ.test("Cotém letras e números 123"))