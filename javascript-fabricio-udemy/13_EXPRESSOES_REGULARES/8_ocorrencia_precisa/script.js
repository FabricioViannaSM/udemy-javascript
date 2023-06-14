let cel = /\d{4,5}-\d{4}/ // delimita caracteres precisos

console.log("celular")
console.log(cel.test("12345-6789"))
console.log(cel.test("1234-5678"))
console.log(cel.test("123-4567"))
console.log(cel.test("1234-567"))

let rg = /\d{2}.\d{3}.\d{3}-\d{1}/

console.log("\nRG:")
console.log(rg.test("28.234.883-0"))
console.log(rg.test("123.123.123.12"))

let data = /\d{2}\/\d{2}\/\d{4}/

console.log("\nData:")
console.log(data.test("02/06/2024"))
console.log(data.test("23/04/22"))
console.log(data.test("23/05/123"))