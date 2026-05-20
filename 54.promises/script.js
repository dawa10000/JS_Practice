// solution to callback hell is promises.
// A promise is a promise of code execution fulfilled or rejected
let promise = new Promise(function (resolve, reject) {
  alert('Hello')
  resolve(56)
})

console.log("Hello One")

setTimeout(() => {
  console.log("hello two in 2 seconds")
}, 2000);

console.log("My name is " + "Hello three")
console.log(promise)

