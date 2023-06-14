let question  = /teste\d?/ //pode conter dígitos após "teste"

//os operadores se referem ao caractere anterior a eles

console.log(question.test("teste#"))//true
console.log(question.test("teste "))//true
console.log(question.test("teste1"))//true
console.log(question.test("teste"))//true
console.log(question.test("1"))//false