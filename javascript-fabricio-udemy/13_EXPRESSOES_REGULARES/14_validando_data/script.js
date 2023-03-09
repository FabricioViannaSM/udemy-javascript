const data = /\d\d\/?\d\d\/?\d?\d?\d\d/

console.log(data.test("01/02/2003"))
console.log(data.test("01092022"))
console.log(data.test("010708"))
console.log(data.test("01/02/03"))