let num = /\d+/

console.log(num.exec("Com o número 100"))
console.log(num.exec("Com o número 100").index)// retorna o index de 100
console.log(num.exec("Não tem número"))// retorna null
