let nums = [13, 14, 15, 16, 17, 18, 19]

//array.slice(inicial, final)

console.log(nums.slice(2))
console.log(nums.slice(0, 4))

// o número final não é contado:
console.log(nums.slice(2,3))
console.log(nums.slice(2,4))

//array até a metade:

console.log(nums.slice(0, nums.length/2))


//Achar um valor de trás pra a frente:

console.log(nums.slice(-2))
console.log(nums.slice(3,-2))

