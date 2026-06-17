
// let a
// Following two lines run successfully due to Javascript hoisting
console.log(a)
greet()
var greet = function () {
  console.log("Good morning")
}
// let a = 9
var a = 9 // Declaration hoisted to the top but initialization is not
console.log(a)

