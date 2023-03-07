// \d - qualquer dígito de caractere
// \w - qualquer caractere alfanuméricio 
// \s - qualquer carcatere de espaço em branco
// \D - caracteres que não são dígitos
// \W - caractere não alfanumérico
// \S - carcatere que não são espaço em branco
// . - quaquer caractere menos nova linha

let pontoRegex = /./

console.log("\nponto:")
console.log(pontoRegex.test("letras"))
console.log(pontoRegex.test("123"))
console.log(pontoRegex.test(" "))
console.log(pontoRegex.test("!@#$%"))
console.log(pontoRegex.test("a!1 "))

let d = /\d/ // /[0-9]/

console.log("\nd:")
console.log(d.test("letras"))
console.log(d.test("1234"))

let w = /\w/

console.log("\nw:")
console.log(w.test("letras"))
console.log(w.test("123"))
console.log(w.test("     @"))

let s = /\s/

console.log("\ns")
console.log(s.test("com espaço "))
console.log(s.test("semEspaço"))

let D = /\D/

console.log("\nD")
console.log(D.test("Sem número"))
console.log(D.test("1"))

let W = /\W/

console.log("\nW")
console.log(W.test("Alfanumerico123"))
console.log(W.test("@   @"))

let S = /\S/

console.log("\nS")
console.log(S.test("SemEspaço"))
console.log(S.test(" "))