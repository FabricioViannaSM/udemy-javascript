let space = /\s/

console.log(space.exec("Com espaço"))
console.log(space.exec("Com espaço").index)// retorna apenas o index dp espaço
console.log(space.exec("semEspaço"))// retorna null
