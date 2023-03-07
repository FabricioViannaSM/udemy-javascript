let sem123 = /[^123]/ //retorn false para as stirngs que contem o prâmetro

console.log(sem123.test("111222344"))
console.log(sem123.test("321"))
console.log(sem123.test("12"))

let deAaZ = /[^a-z]/ // se só tem letras retorna false

console.log(deAaZ.test("receba"))
console.log(deAaZ.test("123"))