const email = /\w\@(gmail|hotmail|yahoo).com/

console.log(email.test("josefinagamer123@gmail.com"))
console.log(email.test("josefinagamer123@gmail.co"))
console.log(email.test("josefinagamer123gmail.com"))
console.log(email.test("josefinagamer123@hotmail.com"))