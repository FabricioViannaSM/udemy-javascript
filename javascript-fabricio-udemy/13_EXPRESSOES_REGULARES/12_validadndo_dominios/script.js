const dominio = /[?www]\.\w+\.com|com\.br/ // [? seleciona um conjunto de carateres opcionais]

console.log(dominio.test("www.sitealeatorio.com"))
console.log(dominio.test("www.sitealeatorio.com.br"))
console.log(dominio.test("ww.sitealeatorio.com"))
console.log(dominio.test("www.sitealeatorio.co"))
console.log(dominio.test("sitealeatorio.com"))