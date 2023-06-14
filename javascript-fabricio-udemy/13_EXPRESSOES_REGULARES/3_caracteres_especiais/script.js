// \d - Qualquer dígito de caractere
// \w - Um caractere alfanumérico
// \s - Qualquer caractere de espaço em branco
// \D - Caracteres que não são dígiots
// \W - Caracteres que não são alfanuméricos
// \S - Caracteres que não são espaços em branco
// . - Qualquer caractere, menos nova linha

const pontoRegex = /./
console.log(pontoRegex.test("123"))//true
console.log(pontoRegex.test("abc"))//true
console.log(pontoRegex.test("!@#"))//true
console.log(pontoRegex.test("   "))//true
console.log(pontoRegex.test("\n"))//false

const dMin = /\d/ // [0-9]
console.log(dMin.test("123"))//true
console.log(dMin.test("abc"))//false
console.log(dMin.test("!@#"))//false
console.log(dMin.test("   "))//false
console.log(dMin.test("\n"))//false

const dMai = /\D/ // [^0-9]
console.log(dMai.test("123"))//false
console.log(dMai.test("abc"))//true
console.log(dMai.test("!@#"))//true
console.log(dMai.test("   "))//true
console.log(dMai.test("\n"))//true

const wMin = /\w/
console.log(wMin.test("123"))//true
console.log(wMin.test("abc"))//true
console.log(wMin.test("!@#"))//false
console.log(wMin.test("   "))//false
console.log(wMin.test("\n"))//false

const wMai = /\W/
console.log(wMai.test("123"))//false
console.log(wMai.test("abc"))//false
console.log(wMai.test("!@#"))//true
console.log(wMai.test("   "))//true
console.log(wMai.test("\n"))//true

const sMin = /\s/
console.log(sMin.test("123"))//false
console.log(sMin.test("abc"))//false
console.log(sMin.test("!@#"))//false
console.log(sMin.test("   "))//true
console.log(sMin.test("\n"))//true

const sMai = /\S/
console.log(sMai.test("123"))//true
console.log(sMai.test("abc"))//true
console.log(sMai.test("!@#"))//true
console.log(sMai.test("   "))//false
console.log(sMai.test("\n"))//false