let regexID = /\d+ID\b/

console.log(regexID.test("1234567ID"))
console.log(regexID.test("12344523"))
console.log(regexID.test("ID"))