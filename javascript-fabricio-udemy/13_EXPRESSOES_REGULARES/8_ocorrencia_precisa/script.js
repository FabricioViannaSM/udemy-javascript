let tel = /\d{4,5}-?\d{4}/  //deve conter 4 ou 5 digitos, pode ou nao conter "-", deve conter 4 digitos

console.log(tel.test("99999-9999"))
console.log(tel.test("9999-9999"))
console.log(tel.test("999-9999"))
console.log(tel.test("999999999"))
console.log(tel.test("99999999"))
console.log(tel.test("9999999"))

let cpf = /\d{3}.\d{3}.\d{3}-\d{2}/

console.log("\nCPF:")
console.log(cpf.test("111.111.111-11"))
console.log(cpf.test("123.123.123.12"))

let data = /\d{2}\/\d{2}\/\d{4}/ //Para utilizar carcteres especiais usa-se "\" na frente deles


console.log("\nData:")
console.log(data.test("08/03/2023"))