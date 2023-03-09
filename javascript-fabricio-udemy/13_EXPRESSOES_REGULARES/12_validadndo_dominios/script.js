const dominio = /www.\w+.com|com.br/

console.log(dominio.test("www.sitealeatorio.com"))
console.log(dominio.test("www.sitealeatorio.com.br"))
console.log(dominio.test("ww.sitealeatorio.com"))
console.log(dominio.test("www.sitealeatorio.co"))