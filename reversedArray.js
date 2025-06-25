function digitize(n) {
let result = n.toString()
return result.split('').reverse().map(Number)
}
console.log(digitize(123))