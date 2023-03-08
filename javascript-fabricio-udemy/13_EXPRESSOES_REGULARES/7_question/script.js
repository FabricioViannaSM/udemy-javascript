let question  = /Prova\d?/ //pode conter dígitos após "Prova" 

console.log(question.test("Prova#"))//true
console.log(question.test("Prova1"))//true
console.log(question.test("prova1"))//false
console.log(question.test("prova"))//false
console.log(question.test("1"))//false