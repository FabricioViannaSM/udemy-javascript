let capslock = /[A-Z]/

console.log(capslock.test("APENAS CAIXA ALTA"))
console.log(capslock.test("apenas caixa baixa"))
console.log(capslock.test("Com Caixas Mistas"))
console.log(capslock.test("123"))