const data = /[0-9]{2}[/][0-9]{2}[/]([0-9]{4}|[0-9]{2})/

console.log(data.test("12/09/2004"))
console.log(data.test("01/09/04"))
console.log(data.test("1/2/3"))